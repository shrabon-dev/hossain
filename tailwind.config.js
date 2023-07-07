/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'carveCard': 'carveCard 2.5s ease-in-out',
        'moveTop': 'moveTop 3s linear infinite',
        'small_big': 'small_big 3s linear infinite',
        'rotate': 'rotate 4s linear infinite',
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
          '0%, 100%': { transform: 'translateX(-50%) translateY(-50%)' },
          '50%': { transform: 'translateX(-50%) translateY(-80%)' },
        },
        carveCard: {
          '0%': { transform: 'rotateX(-69deg) perspective(500px)  skewY(0)'},
          '100%': { transform: 'rotateX(0deg) perspective(500px)  skewY(0)' },
        },
        small_big: {
          '0%, 100%': { transform: 'scale(.8) rotate(45deg)' },
          '50%': { transform: 'scale(.4) rotate(45deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
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

