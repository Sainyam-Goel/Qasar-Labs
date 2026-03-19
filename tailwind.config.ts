import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1e3a5f', dark: '#0f2440', light: '#2a5080' },
        accent: '#0ea5e9',
        surface: '#ffffff',
        page: '#f8f9fb',
        'section-alt': '#f1f4f8',
        'tint-blue': '#eef4fb',
        'tint-green': '#eef7f2',
      }
    }
  },
  plugins: []
} satisfies Config;
