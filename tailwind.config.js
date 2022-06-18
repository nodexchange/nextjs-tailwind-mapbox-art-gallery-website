module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      bigShoulder: ['Big Shoulders Display'],
      outfit: ['Outfit', 'sans-serif'],
    },
    extend: {
      animation: {
        'reserve-bounce': 'reserveBounce 3s infinite',
        'reserve-color': 'reserveColor 3s infinite',
      },
      keyframes: {
        reserveColor: {
          '0%, 100%': {
            color: '#ffb2b2',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '10%, 90%': {
            color: '#ffb2b2',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            color: '#fff',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        reserveBounce: {
          '0%, 100%': {
            transform: 'translateX(-10%)',
            color: '#bb0546',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '10%, 90%': {
            transform: 'translateX(-10%)',
            color: '#bb0546',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            color: '#fff',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      backgroundColor: {
        'custom-stone': '#151515',
        shine: '#bb0546',
        'shine-alpha': 'rgba(187, 5, 69, 0.5)',
        'shine-low-alpha': 'rgba(187, 5, 69, 0.9)',
        shineDark: '#610324',
      },
      dropShadow: {
        xl: '0 2px 2px rgba(0, 0, 0, 0.4)',
        '3xl': '0 5px 2px rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        mobileMap: "url('/mobile/image-map.jpg')",
        tabletMap: "url('/tablet/image-map.jpg')",
        desktopMap: "url('/desktop/image-map.jpg')",
        desktopHero: "url('/desktop/image-hero.jpg');",
        aboutImage: "linear-gradient(rgba(187, 5, 69, 0.9), rgba(187, 5, 69, 0.95)), url('/desktop/image-hero.jpg');",
        courseImage: "linear-gradient(rgba(187, 5, 69, 0.95), rgba(187, 5, 69, 0.95)), url('/bachata-dancing.jpg');",
        instructorsImage: "linear-gradient(rgba(187, 5, 69, 0.95), rgba(187, 5, 69, 0.99)), url('/logo.png');",
      },
      colors: {
        gold: '#D5966C',
        almostBlack: '#151515',
        navBlack: 'rgba(0, 0, 0, 0.4)',
        navBlackEnd: 'rgba(0, 0, 0, 0.2)',
        darkGray: '#444444',
        shine: '#bb0546',
        shineDark: '#610324',
      },
      width: {
        btn: '260px',
        350: '350px',
      },
      maxWidth: {
        540: '540px',
      },
      height: {
        btn: '72px',
        mobile: '336px',
        tablet: '218px',
        550: '550px',
        600: '600px',
      },
      content: {
        mobileLink: 'url("/mobile/image-hero@2x.jpg")',
      },
      fontSize: {
        headingXL: [
          '96px',
          {
            lineHeight: '88px',
          },
        ],
        headingL: [
          '70px',
          {
            lineHeight: '70px',
          },
        ],
        headingXM: [
          '60px',
          {
            lineHeight: '60px',
          },
        ],
        headingMM: [
          '55px',
          {
            lineHeight: '50px',
          },
        ],
        headingM: [
          '50px',
          {
            lineHeight: '45px',
          },
        ],
        headingS: [
          '36px',
          {
            lineHeight: '36px',
          },
        ],
        headingXS: [
          '32px',
          {
            lineHeight: '32px',
          },
        ],
        bodyM: [
          '22px',
          {
            lineHeight: '32px',
          },
        ],

        bodyS: [
          '18px',
          {
            lineHeight: '28px',
          },
        ],
        button: [
          '20px',
          {
            letterSpacing: '3.64px',
          },
        ],
        bodyXS: [
          '16px',
          {
            lineHeight: '26px',
          },
        ],
      },
    },
  },
  plugins: [],
};
