// Export Firebase configuration and services
export { db, storage, auth } from './config';

// Export Firestore helpers
export * from './firestore';

// Export Storage helpers
export * from './storage';

// Export Auth helpers
export * from './auth';

// Re-export commonly used Firebase functions
export {
  serverTimestamp,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
