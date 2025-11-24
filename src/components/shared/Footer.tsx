'use client';

import { Heart, ArrowUp } from 'lucide-react';
import { socialLinks, navigation, siteInfo, services } from '@/constants/site-config';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quickLinks = navigation;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-500/20 bg-black/40 backdrop-blur-sm">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors text-left group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    {link.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Services</h4>
            <nav className="flex flex-col gap-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {service}
                </div>
              ))}
            </nav>
          </div>

          {/* Social Links & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4 text-purple-400 group-hover:text-white transition-colors" />
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-gray-400">
              Open to collaboration opportunities
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} {siteInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-purple-400 fill-current" /> {siteInfo.buildWith.split('with ')[1]}
            </p>
          </div>

          {/* Scroll to Top Button */}
          <Button
            onClick={scrollToTop}
            size="sm"
            variant="outline"
            className="border-purple-500/30 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
