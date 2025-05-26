/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F6F1EA',
          100: '#EBE1D3',
          200: '#D7C3A7',
          300: '#C3A57B',
          400: '#AE874F',
          500: '#8B5A2B', // Primary brand color
          600: '#73471F',
          700: '#5C3516',
          800: '#44220E',
          900: '#2C1107',
        },
        secondary: {
          50: '#FAF7F4',
          100: '#F4EEE8',
          200: '#E9DDD1',
          300: '#DECBBA',
          400: '#D3BAA4',
          500: '#D7BEA8', // Secondary brand color
          600: '#BFA185',
          700: '#A68562',
          800: '#8D6C40',
          900: '#74531E',
        },
        accent: {
          50: '#EDF1EC',
          100: '#DBE3D9',
          200: '#B7C7B4',
          300: '#93AB8E',
          400: '#6E8F69',
          500: '#4A6741', // Accent brand color
          600: '#3C5433',
          700: '#2E4125',
          800: '#202E17',
          900: '#121B09',
        },
        neutral: {
          50: '#F9F7F3', // Background
          100: '#F2EDE6',
          200: '#E6DBCD',
          300: '#D9C9B4',
          400: '#CCB79B',
          500: '#BFA582',
          600: '#9A8361',
          700: '#756240',
          800: '#50401F',
          900: '#2B1F0A',
        },
        success: {
          50: '#EAFAF1',
          100: '#D5F5E3',
          200: '#ABEBC6',
          300: '#82E0AA',
          400: '#58D68D',
          500: '#2ECC71',
          600: '#25A55A',
          700: '#1C7F44',
          800: '#13592D',
          900: '#0A2C17',
        },
        warning: {
          50: '#FEF9E7',
          100: '#FCF3CF',
          200: '#F9E79F',
          300: '#F7DC6F',
          400: '#F4D03F',
          500: '#F1C40F',
          600: '#C19D0B',
          700: '#927608',
          800: '#634F05',
          900: '#342802',
        },
        error: {
          50: '#FDEDEC',
          100: '#FADBD8',
          200: '#F5B7B1',
          300: '#F1948A',
          400: '#EC7063',
          500: '#E74C3C',
          600: '#B93D30',
          700: '#8B2E24',
          800: '#5E1F18',
          900: '#300F0C',
        },
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        soft: '0 2px 15px rgba(0, 0, 0, 0.05)',
        medium: '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '1rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-subtle': 'pulseSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};