"use client";
import { AlertTriangle, ShieldOff, Reply, ServerCrash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const firewallMessages = [
  "ALERT: Unauthorized access attempt on restricted_zone:/404",
  "SYSTEM_CALL: Firewall_Core_Daemon::Block_Request()",
  "EVENT_ID: 0xDEADBEEFCAFE",
  "SEVERITY: CRITICAL_ERROR",
  "SOURCE_IP: 127.0.0.1 (Loopback Anomaly Detected)",
  "PROTOCOL: HTTP/S_Stealth",
  "ACTION: Connection_Terminated :: Page_Obfuscated",
  "TRACE_ROUTE: Initiating counter-intrusion protocols...",
  "LOG: Entity is attempting to access a non-existent or secured sector.",
  "STATUS: Intrusion_Detected :: Resource_Not_Found",
  "ADVISORY: Return to a known safe zone immediately.",
];

export default function NotFound() {
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < firewallMessages.length) {
        setDisplayedLogs(prev => [...prev, firewallMessages[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 300); // Adjust speed of log display
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-neon-green p-6">
      <div className="text-center mb-8">
        <AlertTriangle size={80} className="mx-auto mb-4 text-destructive animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold font-headline glitch" data-text="404: INTRUSION DETECTED">
          404: INTRUSION DETECTED
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          The sector you are trying to access does not exist or has been secured.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-black/50 border-2 border-destructive rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-destructive mb-3 flex items-center">
          <ShieldOff size={24} className="mr-2" /> Firewall Log: Anomaly Detected
        </h2>
        <div className="h-48 overflow-y-auto font-code text-sm space-y-1 terminal-scroll pr-2">
          {displayedLogs.map((log, index) => (
            <p key={index} className="whitespace-pre-wrap animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="text-muted-foreground/70">{`[${new Date().toLocaleTimeString()}] `}</span>{log}
            </p>
          ))}
          {displayedLogs.length === firewallMessages.length && (
            <p className="text-yellow-400 animate-pulse">[SYSTEM_HALT: Further logging suppressed due to anomaly severity]</p>
          )}
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-md text-muted-foreground mb-4">
          Return to a secure entry point:
        </p>
        <Button 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group transition-all duration-300 ease-in-out transform hover:scale-105 shadow-purple-glow"
          onClick={() => router.back()}
          >
          <Reply size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Go Back
        </Button>
      </div>

      <ServerCrash size={32} className="text-muted-foreground/30 absolute bottom-8 right-8 animate-pulse opacity-50" />
    </div>
  );
}
