'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, Instagram, Send, MapPin, Phone, MessageSquare, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Nodemailer API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message sent successfully! 🎉",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again or email me directly at dotdefence.info@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/techjunior2022', color: 'hover:text-gray-400', gradient: 'from-gray-400 to-gray-600' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pranaavbhatnagar03', color: 'hover:text-blue-400', gradient: 'from-blue-400 to-blue-600' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/0xpranaav/', color: 'hover:text-pink-400', gradient: 'from-pink-400 to-pink-600' },
    { icon: Mail, label: 'Email', href: 'mailto:dotdefence.info@gmail.com', color: 'hover:text-red-400', gradient: 'from-red-400 to-red-600' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'dotdefence.info@gmail.com', href: 'mailto:dotdefence.info@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'India', href: null },
    { icon: Phone, label: 'Availability', value: 'Open to opportunities', href: null },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-pink-500/5 to-background -z-10" />

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Get In <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          {/* Left Column - Contact Form */}
          <div>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Send a Message</h3>
                    <p className="text-sm text-muted-foreground">I'll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border/50 focus:border-pink-500/50 bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border/50 focus:border-pink-500/50 bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-border/50 focus:border-pink-500/50 bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Info & Social */}
          <div className="space-y-4">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-pink-500/50 transition-all group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-pink-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{info.label}</h4>
                        {info.href ? (
                          <a href={info.href} className="text-sm text-muted-foreground hover:text-pink-400 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Social Links Card */}
            <Card className="border-border/50 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-violet-500/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-pink-500/50 transition-all hover:scale-105 group"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{social.label}</p>
                          <p className="text-xs text-muted-foreground">Follow me</p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full border-pink-500/50 hover:bg-pink-500/10"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Banner - Centered with proper spacing */}
        <div className="mt-8 flex justify-center">
          <Card className="border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm max-w-md w-full">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                  Available for Projects
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to freelance, full-time, and collaborative opportunities
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
