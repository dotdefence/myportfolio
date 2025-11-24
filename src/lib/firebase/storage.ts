import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  listAll,
} from 'firebase/storage';
import { storage } from './config';

/**
 * Upload a file to Firebase Storage
 * @param file - The file to upload
 * @param path - Storage path (e.g., 'projects/image.jpg')
 * @param onProgress - Optional callback for upload progress (0-100)
 * @returns Download URL of the uploaded file
 */
export async function uploadFile(
  file: File,
  path: string,
  onProgress?: (progress: number) => void
): Promise<string> {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Calculate progress percentage
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (onProgress) {
          onProgress(progress);
        }
      },
      (error) => {
        console.error('Upload error:', error);
        reject(error);
      },
      async () => {
        // Upload completed successfully, get download URL
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          reject(error);
        }
      }
    );
  });
}

/**
 * Upload file with automatic path generation
 * @param file - The file to upload
 * @param folder - Storage folder (e.g., 'projects', 'blog', 'certifications')
 * @param onProgress - Optional callback for upload progress
 * @returns Download URL of the uploaded file
 */
export async function uploadFileAuto(
  file: File,
  folder: string = 'uploads',
  onProgress?: (progress: number) => void
): Promise<string> {
  const timestamp = Date.now();
  const fileName = `${timestamp}_${file.name}`;
  const path = `${folder}/${fileName}`;
  
  return uploadFile(file, path, onProgress);
}

/**
 * Delete a file from Firebase Storage
 * @param path - Storage path of the file to delete
 */
export async function deleteFile(path: string): Promise<void> {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
  } catch (error) {
    console.error('Delete error:', error);
    throw error;
  }
}

/**
 * Delete a file by its download URL
 * @param downloadURL - The download URL of the file
 */
export async function deleteFileByURL(downloadURL: string): Promise<void> {
  try {
    // Extract path from URL
    const url = new URL(downloadURL);
    const pathMatch = url.pathname.match(/\/o\/(.+?)\?/);
    
    if (pathMatch && pathMatch[1]) {
      const path = decodeURIComponent(pathMatch[1]);
      await deleteFile(path);
    } else {
      throw new Error('Could not extract path from URL');
    }
  } catch (error) {
    console.error('Delete by URL error:', error);
    throw error;
  }
}

/**
 * List all files in a folder
 * @param folderPath - The folder path to list files from
 * @returns Array of file references
 */
export async function listFiles(folderPath: string) {
  try {
    const storageRef = ref(storage, folderPath);
    const result = await listAll(storageRef);
    
    return Promise.all(
      result.items.map(async (itemRef) => ({
        name: itemRef.name,
        fullPath: itemRef.fullPath,
        url: await getDownloadURL(itemRef),
      }))
    );
  } catch (error) {
    console.error('List files error:', error);
    throw error;
  }
}

/**
 * Get download URL for a file
 * @param path - Storage path of the file
 * @returns Download URL
 */
export async function getFileURL(path: string): Promise<string> {
  try {
    const storageRef = ref(storage, path);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error('Get file URL error:', error);
    throw error;
  }
}

/**
 * Validate file type
 * @param file - The file to validate
 * @param allowedTypes - Array of allowed MIME types
 * @returns true if valid, false otherwise
 */
export function validateFileType(
  file: File,
  allowedTypes: string[] = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
): boolean {
  return allowedTypes.includes(file.type);
}

/**
 * Validate file size
 * @param file - The file to validate
 * @param maxSizeMB - Maximum file size in MB
 * @returns true if valid, false otherwise
 */
export function validateFileSize(file: File, maxSizeMB: number = 5): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
}

/**
 * Generate storage path for different types of uploads
 */
export const storagePaths = {
  projects: (fileName: string) => `projects/${Date.now()}_${fileName}`,
  experience: (fileName: string) => `experience/${Date.now()}_${fileName}`,
  certifications: (fileName: string) => `certifications/${Date.now()}_${fileName}`,
  misc: (fileName: string) => `misc/${Date.now()}_${fileName}`,
  profile: (fileName: string) => `profile/${Date.now()}_${fileName}`,
};

export type StoragePath = keyof typeof storagePaths;
