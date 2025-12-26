import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'], // App will be dark by default via globals.css
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['var(--font-body)', 'monospace'],
        headline: ['var(--font-body)', 'monospace'],
        code: ['var(--font-body)', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        dark: {
          900: '#050505', // Deepest Black
          800: '#0a0a0a', // Component Black
          700: '#121212', // Lighter Black
        },
        neon: {
          purple: '#b026ff', // Electric Purple
          pink: '#ff006e',   // Cyber Pink
          blue: '#3b82f6',   // Tech Blue
          green: '#00ff94',  // Hacker Green
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        'neon-green': 'hsl(var(--accent))',
        'electric-purple': 'hsl(var(--primary))',
        'dark-gray': 'hsl(var(--background))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0'},
          '100%': { transform: 'translateY(0)', opacity: '1'},
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px hsl(var(--accent)), 0 0 10px hsl(var(--accent) / 0.8)' },
          '50%': { boxShadow: '0 0 10px hsl(var(--accent)), 0 0 20px hsl(var(--accent) / 0.8)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-up': 'slideInUp 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'neon-sm': '0 0 5px hsl(var(--accent)), 0 0 10px hsl(var(--accent) / 0.5)',
        'neon-md': '0 0 10px hsl(var(--accent)), 0 0 20px hsl(var(--accent) / 0.5)',
        'neon-lg': '0 0 15px hsl(var(--accent)), 0 0 30px hsl(var(--accent) / 0.5)',
        'purple-glow': '0 0 8px hsl(var(--primary)), 0 0 16px hsl(var(--primary) / 0.7)',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
