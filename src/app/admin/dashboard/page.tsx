'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Shield,
    LogOut,
    FolderKanban,
    Briefcase,
    Award,
    Code2,
    User,
    Settings,
    BarChart3
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const userData = localStorage.getItem('admin_user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        router.push('/admin/login');
    };

    const menuItems = [
        {
            title: 'Projects',
            description: 'Manage your portfolio projects',
            icon: FolderKanban,
            href: '/admin/projects',
            color: 'from-violet-500 to-purple-500',
        },
        {
            title: 'Experience',
            description: 'Update work experience',
            icon: Briefcase,
            href: '/admin/experience',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Certifications',
            description: 'Manage certifications',
            icon: Award,
            href: '/admin/certifications',
            color: 'from-orange-500 to-pink-500',
        },
        {
            title: 'Skills',
            description: 'Edit skills and technologies',
            icon: Code2,
            href: '/admin/skills',
            color: 'from-green-500 to-emerald-500',
        },
        {
            title: 'About',
            description: 'Update about section',
            icon: User,
            href: '/admin/about',
            color: 'from-pink-500 to-rose-500',
        },
        {
            title: 'Settings',
            description: 'Site configuration',
            icon: Settings,
            href: '/admin/settings',
            color: 'from-gray-500 to-slate-500',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-purple-500/5 to-background">
            {/* Header */}
            <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Portfolio Admin</h1>
                            <p className="text-xs text-muted-foreground">Content Management System</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {user && (
                            <div className="hidden sm:block text-right">
                                <p className="text-sm font-medium">Admin User</p>
                                <p className="text-xs text-muted-foreground">{user.email}</p>
                            </div>
                        )}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleLogout}
                            className="border-destructive/50 text-destructive hover:bg-destructive/10"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">
                        Welcome to Admin Panel
                    </h2>
                    <p className="text-muted-foreground">
                        Manage your portfolio content from this dashboard
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Total Projects
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">6</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                3 featured projects
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Certifications
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">10+</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                All verified
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Experience
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">4</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Work positions
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link key={item.href} href={item.href}>
                                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-500/50 hover:bg-purple-500/5 transition-all cursor-pointer group h-full">
                                        <CardHeader>
                                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center mb-3`}>
                                                <Icon className="w-6 h-6 text-foreground" />
                                            </div>
                                            <CardTitle className="text-lg">{item.title}</CardTitle>
                                            <CardDescription>{item.description}</CardDescription>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Info Banner */}
                <Card className="border-purple-500/30 bg-purple-500/5">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-purple-400" />
                            Getting Started
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                        <p>• Click on any section above to start managing your content</p>
                        <p>• Changes are saved to Firebase Firestore in real-time</p>
                        <p>• Your portfolio will update automatically when you publish changes</p>
                        <p>• Use the logout button in the top-right to end your session</p>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
