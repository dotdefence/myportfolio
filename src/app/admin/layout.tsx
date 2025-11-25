'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Check if user is authenticated (except on login page)
        const isLoginPage = pathname?.includes('/login');

        if (!isLoginPage) {
            const token = localStorage.getItem('admin_token');

            if (!token) {
                // Not authenticated, redirect to login
                router.push('/admin/login');
            }
        }
    }, [pathname, router]);

    return (
        <>
            {children}
            <Toaster />
        </>
    );
}
