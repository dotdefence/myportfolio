'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminLoginPage() {
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Login failed');
                toast({
                    title: 'Login Failed',
                    description: data.error || 'Invalid password',
                    variant: 'destructive',
                });
                return;
            }

            // Store token in localStorage
            if (data.token) {
                localStorage.setItem('admin_token', data.token);
                localStorage.setItem('admin_user', JSON.stringify(data.user));
            }

            toast({
                title: 'Login Successful',
                description: 'Redirecting to dashboard...',
            });

            // Redirect to dashboard
            router.push('/admin/dashboard');
        } catch (err) {
            console.error('Login error:', err);
            setError('An unexpected error occurred');
            toast({
                title: 'Error',
                description: 'An unexpected error occurred',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-purple-500/5 to-background p-4">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

            <Card className="w-full max-w-md border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-4 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                        <Shield className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
                        <CardDescription>
                            Enter your password to access the admin panel
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="password" className="flex items-center gap-2">
                                <Lock className="w-4 h-4" />
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter admin password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={isLoading}
                                className="border-border/50 bg-background/50"
                                autoFocus
                            />
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                <p>{error}</p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                    Authenticating...
                                </>
                            ) : (
                                'Access Admin Panel'
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-xs text-muted-foreground">
                        <p>Protected admin area</p>
                        <p className="mt-1">Unauthorized access is prohibited</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
