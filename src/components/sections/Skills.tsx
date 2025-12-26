'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Row1Icons = [
    { name: 'HTML5', icon: '/skills/html5.svg', color: '#E34F26' },
    { name: 'CSS3', icon: '/skills/css3.svg', color: '#1572B6' },
    { name: 'JavaScript', icon: '/skills/javascript.svg', color: '#F7DF1E' },
    { name: 'TypeScript', icon: '/skills/typescript.svg', color: '#3178C6' },
    { name: 'React', icon: '/skills/react.svg', color: '#61DAFB' },
    { name: 'Vue', icon: '/skills/vue.svg', color: '#4FC08D' },
    { name: 'Angular', icon: '/skills/angular.svg', color: '#DD0031' },
    { name: 'Svelte', icon: '/skills/svelte.svg', color: '#FF3E00' },
    { name: 'Next.js', icon: '/skills/nextjs.svg', color: '#FFFFFF' },
    { name: 'Tailwind CSS', icon: '/skills/tailwind.svg', color: '#06B6D4' },
    { name: 'Figma', icon: '/skills/figma.svg', color: '#F24E1E' },
    { name: 'VS Code', icon: '/skills/vscode.svg', color: '#007ACC' },
    { name: 'Git', icon: '/skills/git.svg', color: '#F05032' },
];

const Row2Icons = [
    { name: 'Node.js', icon: '/skills/nodejs.svg', color: '#339933' },
    { name: 'Python', icon: '/skills/python.svg', color: '#3776AB' },
    { name: 'Java', icon: '/skills/java.svg', color: '#007396' },
    { name: 'Go', icon: '/skills/go.svg', color: '#00ADD8' },
    { name: 'C++', icon: '/skills/cpp.svg', color: '#00599C' },
    { name: 'PHP', icon: '/skills/php.svg', color: '#777BB4' },
    { name: 'Ruby', icon: '/skills/ruby.svg', color: '#CC342D' },
    { name: 'Swift', icon: '/skills/swift.svg', color: '#F05138' },
    { name: 'Kotlin', icon: '/skills/kotlin.svg', color: '#7F52FF' },
    { name: 'Dart', icon: '/skills/dart.svg', color: '#0175C2' },
    { name: 'Rust', icon: '/skills/rust.svg', color: '#DEA584' },
    { name: 'Laravel', icon: '/skills/laravel.svg', color: '#FF2D20' },
    { name: 'Django', icon: '/skills/django.svg', color: '#092E20' },
];

const Row3Icons = [
    { name: 'MongoDB', icon: '/skills/mongodb.svg', color: '#47A248' },
    { name: 'PostgreSQL', icon: '/skills/postgresql.svg', color: '#4169E1' },
    { name: 'MySQL', icon: '/skills/mysql.svg', color: '#4479A1' },
    { name: 'Redis', icon: '/skills/redis.svg', color: '#DC382D' },
    { name: 'ElasticSearch', icon: '/skills/elasticsearch.svg', color: '#005571' },
    { name: 'GraphQL', icon: '/skills/graphql.svg', color: '#E10098' },
    { name: 'Firebase', icon: '/skills/firebase.svg', color: '#FFCA28' },
    { name: 'Docker', icon: '/skills/docker.svg', color: '#2496ED' },
    { name: 'Kubernetes', icon: '/skills/kubernetes.svg', color: '#326CE5' },
    { name: 'Jenkins', icon: '/skills/jenkins.svg', color: '#D24939' },
    { name: 'Ansible', icon: '/skills/ansible.svg', color: '#EE0000' },
    { name: 'Terraform', icon: '/skills/terraform.svg', color: '#7B42BC' },
    { name: 'Nginx', icon: '/skills/nginx.svg', color: '#009639' },
];

const Row4Icons = [
    { name: 'Kali Linux', icon: '/skills/kali.svg', color: '#557C94' },
    { name: 'Burp Suite', icon: '/skills/burp.ico', color: '#FF6633' },
    { name: 'Metasploit', icon: '/skills/metasploit.svg', color: '#3F51B5' },
    { name: 'Nmap', icon: '/skills/nmap.png', color: '#2B1D0E' },
    { name: 'Wireshark', icon: '/skills/wireshark.svg', color: '#1679A7' },
    { name: 'Ghidra', icon: '/skills/ghidra.png', color: '#727272' },
    { name: 'Maltego', icon: '/skills/maltego.ico', color: '#E66400' },
    { name: 'Hydra', icon: '/skills/hydra.svg', color: '#FF0040' },
    { name: 'OWASP', icon: '/skills/owasp.png', color: '#322E75' },
    { name: 'Hashcat', icon: '/skills/hashcat.ico', color: '#777777' },
    { name: 'Tor', icon: '/skills/tor.svg', color: '#7D4698' },
    { name: 'Wireguard', icon: '/skills/wireguard.svg', color: '#88171A' },
    { name: 'Splunk', icon: '/skills/splunk.ico', color: '#000000' },
];

const Row5Icons = [
    { name: 'AWS', icon: '/skills/aws.svg', color: '#FF9900' },
    { name: 'Azure', icon: '/skills/azure.svg', color: '#0089D6' },
    { name: 'GCP', icon: '/skills/gcp.svg', color: '#4285F4' },
    { name: 'Cloudflare', icon: '/skills/cloudflare.svg', color: '#F38020' },
    { name: 'Vercel', icon: '/skills/vercel.svg', color: '#FFFFFF' },
    { name: 'Netlify', icon: '/skills/netlify.svg', color: '#00C7B7' },
    { name: 'GitHub', icon: '/skills/github.svg', color: '#FFFFFF' },
    { name: 'Bitbucket', icon: '/skills/bitbucket.svg', color: '#0052CC' },
    { name: 'Cisco', icon: '/skills/cisco.svg', color: '#1BA0D7' },
    { name: 'Fortinet', icon: '/skills/fortinet.svg', color: '#EE3124' },
    { name: 'Palo Alto', icon: '/skills/paloalto.svg', color: '#F68B1F' },
    { name: 'Prometheus', icon: '/skills/prometheus.svg', color: '#E6522C' },
    { name: 'Grafana', icon: '/skills/grafana.svg', color: '#F46800' },
];

const Skills: React.FC = () => {
    const { scrollYProgress } = useScroll();

    // Custom transform ranges for the parallax drift effect
    const x1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const x2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const x3 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const x4 = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const x5 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section id="skills" className="frameworks-section border-y border-white/5 bg-[#020202]">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white text-3xl md:text-5xl font-bold mb-16 tracking-tight"
                >
                    Powering your favorite frameworks and tools
                </motion.h2>

                <div className="frameworks-container">
                    {/* Row 1: Icons */}
                    <motion.div style={{ x: x1 }} className="framework-row">
                        {Row1Icons.map((item, i) => (
                            <div
                                key={`r1-${i}`}
                                className="framework-card active"
                                style={{ '--glow-color': item.color } as React.CSSProperties}
                            >
                                <img src={item.icon} alt={item.name} loading="lazy" />
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 2: Icons */}
                    <motion.div style={{ x: x2 }} className="framework-row">
                        {Row2Icons.map((item, i) => (
                            <div
                                key={`r2-${i}`}
                                className="framework-card active"
                                style={{ '--glow-color': item.color } as React.CSSProperties}
                            >
                                <img src={item.icon} alt={item.name} loading="lazy" />
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 3: Icons */}
                    <motion.div style={{ x: x3 }} className="framework-row">
                        {Row3Icons.map((item, i) => (
                            <div
                                key={`r3-${i}`}
                                className="framework-card active"
                                style={{ '--glow-color': item.color } as React.CSSProperties}
                            >
                                <img src={item.icon} alt={item.name} loading="lazy" />
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 4: Icons */}
                    <motion.div style={{ x: x4 }} className="framework-row">
                        {Row4Icons.map((item, i) => (
                            <div
                                key={`r4-${i}`}
                                className="framework-card active"
                                style={{ '--glow-color': item.color } as React.CSSProperties}
                            >
                                <img src={item.icon} alt={item.name} loading="lazy" />
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 5: Icons */}
                    <motion.div style={{ x: x5 }} className="framework-row">
                        {Row5Icons.map((item, i) => (
                            <div
                                key={`r5-${i}`}
                                className="framework-card active"
                                style={{ '--glow-color': item.color } as React.CSSProperties}
                            >
                                <img src={item.icon} alt={item.name} loading="lazy" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;