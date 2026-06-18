/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Azul royal Begroup — color de marca real (#042396)
        royal: {
          DEFAULT: '#042396',
          50:  '#ECEEF8',
          100: '#D2D8F0',
          200: '#A6B1E1',
          300: '#7184CC',
          400: '#3F56B0',
          500: '#1A3299',
          600: '#042396',
          700: '#031C7C',
          800: '#03165F',
          900: '#020F43',
          950: '#010827',
        },
        // Cian Begroup — acento de identidad/escaneo biométrico (#16C0E6)
        scan: {
          DEFAULT: '#16C0E6',
          50:  '#E6FAFE',
          100: '#C4F1FB',
          300: '#6FDCF2',
          500: '#16C0E6',
          600: '#0E9DBE',
          700: '#0C7C96',
        },
        // Verde "firmado / verificado / válido"
        valid: {
          DEFAULT: '#12A36B',
          50:  '#E6F7EF',
          100: '#C4ECD9',
          500: '#12A36B',
          600: '#0E8657',
          700: '#0A6543',
        },
        // Tinta / superficies oscuras — navy casi negro
        ink: {
          DEFAULT: '#0B1020',
          soft: '#232B45',
          muted: '#5A6178',
          faint: '#8B93AC',
        },
        // Papel / superficies claras editoriales
        paper: {
          DEFAULT: '#F8F8F4',
          warm: '#F1F1EA',
          card: '#FFFFFF',
          line: '#E6E5DD',
          dark: '#0C1124',
        },
      },
      fontFamily: {
        display: ['Spectral', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,16,32,0.04), 0 8px 24px -12px rgba(11,16,32,0.12)',
        card: '0 1px 3px rgba(11,16,32,0.06), 0 22px 48px -24px rgba(11,16,32,0.18)',
        float: '0 30px 70px -28px rgba(11,16,32,0.34)',
        ring: '0 0 0 1px rgba(4,35,150,0.16), 0 18px 50px -24px rgba(4,35,150,0.42)',
        scan: '0 0 0 1px rgba(22,192,230,0.30), 0 18px 50px -24px rgba(22,192,230,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        'pulse-ring': {
          '0%,100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(1.04)' },
        },
        'draw': {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 34s linear infinite',
        'scan-line': 'scan-line 2.6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
