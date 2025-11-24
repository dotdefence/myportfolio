'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Zap, Trophy } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function About() {
  const highlights = [
    { icon: Trophy, label: 'Top 3% TryHackMe' },
    { icon: Zap, label: 'Red Teaming Specialist' },
    { icon: Code2, label: 'Ethical Hacking Expert' },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background -z-10" />

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cybersecurity student passionate about protecting the digital world
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Column - Profile & Bio */}
          <div className="space-y-8">
            {/* Profile Card */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-500/50 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-0.5">
                      <Avatar className="w-full h-full rounded-2xl">
                        <AvatarImage src="/pranaav_avatar.png" alt="Pranaav Bhatnagar" />
                        <AvatarFallback className="text-2xl font-bold bg-background rounded-2xl">
                          PB
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full border-4 border-background flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-bold">Pranaav Bhatnagar</h3>
                    <p className="text-muted-foreground">Cybersecurity Researcher</p>
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                      Available for Collaboration
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bio Text */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-2xl font-bold text-foreground">Hi, I am Pranaav Bhatnagar</span>
                <br className="mb-2" />
                <Badge variant="outline" className="my-2 border-purple-500/50 text-purple-400">
                  🏆 TryHackMe Top 3%
                </Badge>
                <br className="mb-2" />
                A dedicated cybersecurity student passionate about protecting the digital world.
                My focus lies in mastering red teaming by simulating real-world attacks to
                uncover vulnerabilities and strengthen defenses.
              </p>
              <p>
                I actively participate in CTF challenges, sharpening my skills in ethical hacking
                and problem-solving. Currently pursuing BTech in Computer Science at Sharda University,
                I'm constantly expanding my expertise in penetration testing, OSINT, and security research.
              </p>
              <p>
                When I'm not hacking ethically, you'll find me organizing cybersecurity workshops,
                mentoring fellow students, or competing in CTF tournaments. I believe in continuous
                learning and giving back to the cybersecurity community.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border-border/50 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-purple-400" />
                      </div>
                      <p className="text-sm font-medium">{item.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Column - Avatar Image */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Subtle Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-violet-500/20 blur-[120px] animate-pulse" />

              {/* Clean Image */}
              <div className="relative">
                <Image
                  src="/pranaav_avatar.png"
                  alt="Pranaav Bhatnagar"
                  width={600}
                  height={600}
                  className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
