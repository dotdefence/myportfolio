import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://localhost:3000'), // Update this to your actual domain when deployed
  title: 'Pranaav Bhatnagar | Cybersecurity Analyst & Founder @ Dot Defence',
  description: 'Top 3% TryHackMe cybersecurity expert specializing in VAPT, penetration testing, ethical hacking, and AI-driven security solutions. Founder of Dot Defence.',
  keywords: ['cybersecurity', 'penetration testing', 'VAPT', 'ethical hacking', 'Pranaav Bhatnagar', 'Dot Defence', 'TryHackMe', 'HackTheBox', 'red teaming', 'bug bounty'],
  authors: [{ name: 'Pranaav Bhatnagar', url: 'https://github.com/techjunior2022' }],
  creator: 'Pranaav Bhatnagar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Pranaav Bhatnagar - Cybersecurity Expert & Ethical Hacker',
    description: 'Top 3% TryHackMe cybersecurity analyst passionate about securing web and network infrastructures through ethical hacking and penetration testing.',
    siteName: 'Pranaav Bhatnagar Portfolio',
    images: [
      {
        url: '/hackeravatarpranaav.png',
        width: 1200,
        height: 630,
        alt: 'Pranaav Bhatnagar - Cybersecurity Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranaav Bhatnagar | Cybersecurity Analyst',
    description: 'Top 3% TryHackMe | VAPT Expert | Founder @ Dot Defence',
    creator: '@0xpranaav',
    images: ['/hackeravatarpranaav.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} dark`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-dark-900 text-white selection:bg-neon-purple selection:text-white overflow-x-hidden">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Toaster />
        <SpeedInsights />
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for(let registration of registrations) {
                    registration.unregister()
                  }
                })
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
