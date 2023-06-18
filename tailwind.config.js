/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'moveTop': 'moveTop 3s linear infinite',
      },
      keyframes: {
        // smallBig: {
        //   '0%, 100%': { transform: 'scale(1)' },
        //   '50%': { transform: 'scale(1.4)' },
        // },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        moveTop: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      colors: {
        'main_color': '#050A1E',
        '2nd_color': '#0E182B',
        'hover_color': '#243a5c',
        'active': '#FC6A00',
      },
      blur: {
        '4xl' : '300px',
        '5xl' : '500px',
      },
      // backgroundImage: {
      //   'testi-pattern': "url('../images/testimonial/bg.jpg')",
      // },

      screens: {
        'sm_mobile': '300px',
        'md_mobile': '500px',
        'lg_mobile': '575px',
        'tablet': '640px',
        'lg_tablet': '991px',

      },
    },
    fontFamily: {
      'k2d': ['K2D', 'sans-serif'],
      'poppin': ['Poppins', 'sans-serif'],
    },

  },
  plugins: [],
}

