import bcrypt from 'bcryptjs';

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(
    password: string,
    hash: string
): Promise<boolean> {
    return bcrypt.compare(password, hash);
}

/**
 * Get the admin password hash from environment
 */
export function getAdminPasswordHash(): string {
    const password = process.env.ADMIN_PASSWORD;
    if (!password) {
        throw new Error('ADMIN_PASSWORD not configured in environment variables');
    }
    // For now, we'll hash on the fly. In production, store the hash directly
    return password;
}

/**
 * Verify admin password
 */
export async function verifyAdminPassword(password: string): Promise<boolean> {
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
        return false;
    }

    // Simple comparison for now (in production, use hashed comparison)
    // TODO: Store hashed password in env and use bcrypt.compare
    return password === adminPassword;
}

/**
 * Get admin secret path from environment
 */
export function getAdminSecretPath(): string {
    return process.env.NEXT_PUBLIC_ADMIN_SECRET_PATH || 'admin';
}

/**
 * Validate admin secret path
 */
export function isValidAdminPath(path: string): boolean {
    return path === getAdminSecretPath();
}
