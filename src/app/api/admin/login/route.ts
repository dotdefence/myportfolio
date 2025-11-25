import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminPassword } from '@/lib/auth/admin-password';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';

// Get Firebase credentials from environment
const ADMIN_EMAIL = process.env.ADMIN_FIREBASE_EMAIL || 'dotdefence.info@gmail.com';
const ADMIN_FIREBASE_PASSWORD = process.env.ADMIN_FIREBASE_PASSWORD || 'Pranaav@041203';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { password } = body;

        if (!password) {
            return NextResponse.json(
                { error: 'Password is required' },
                { status: 400 }
            );
        }

        // Verify password against environment variable
        const isValid = await verifyAdminPassword(password);

        if (!isValid) {
            return NextResponse.json(
                { error: 'Invalid password' },
                { status: 401 }
            );
        }

        // Sign in with Firebase Auth (using a dummy email)
        // In production, you'd create this user in Firebase Console
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                ADMIN_EMAIL,
                ADMIN_FIREBASE_PASSWORD
            );

            const idToken = await userCredential.user.getIdToken();

            return NextResponse.json({
                success: true,
                token: idToken,
                user: {
                    uid: userCredential.user.uid,
                    email: userCredential.user.email,
                },
            });
        } catch (firebaseError: any) {
            console.error('Firebase auth error:', firebaseError);

            // If user doesn't exist, provide helpful error
            if (firebaseError.code === 'auth/user-not-found') {
                return NextResponse.json(
                    {
                        error: 'Authentication failed. Please contact administrator.',
                        code: 'AUTH_FAILED'
                    },
                    { status: 500 }
                );
            }

            return NextResponse.json(
                { error: 'Authentication failed' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
