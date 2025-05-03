/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6',
          dark: '#60A5FA',
        },
        secondary: {
          light: '#10B981',
          dark: '#34D399',
        },
        background: {
          light: '#FFFFFF',
          dark: '#0F172A',
        },
        text: {
          light: '#1E293B',
          dark: '#F8FAFC',
        },
        accent: {
          light: '#F59E0B',
          dark: '#FBBF24',
        },
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
    },
  },
  plugins: [],
} 