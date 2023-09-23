/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,css}", // Add CSS files here if needed
  ],
  theme: {
    extend: {
      screens: {
        'phone': '320px',
        'tablet': '640px',
        'desktop': '1024px',
        'wide': '1280px',
      },
      colors: {
        // Custom colors
        darkp: '#150E28',
        light: '#903AFF',
        normal: '#D434FE',
      },
      // Define gradients using backgroundImage property
      backgroundImage: {
        // Gradient background color
        primary: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
      },
    },
  },
  plugins: [],
}
