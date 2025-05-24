// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
      },
      animation: {
        tilt: 'tilt 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
