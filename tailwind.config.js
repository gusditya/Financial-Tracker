/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F2EDE4",
        charcoal: "#2B2B28",
        deficit: "#C0392B",
        surplus: "#1E7B55",
        bullion: "#B8872A",
        mist: "#6E6E6A",
        // Legacy Arthanavigate colors matching PRD colors:
        'brand-green': "#1E7B55",
        'brand-red': "#C0392B",
        'brand-gold': "#B8872A",
        'brand-black': "#2B2B28",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
