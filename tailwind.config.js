/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D0D',
        secondary: '#FFFFFF',
        white: '#FFFFFF',
        brown: '#8C7D79',
        lightBrown: '#F0EEEE',
        darkBrown: '#64656A',
        vanilla: '#F5F3E9',
        scarlet: '#FF5526',
        butterCream: '#EFEED9',
        pistachio: '#618040',
        gray: '#A5A49E',
      },
      fontFamily: {
        primary: ['MessinaSans', 'sans-serif'],
        secondary: ['StyreneBLC', 'sans-serif'],
        heading: ['Granville', 'sans-serif'],
        form: ['StyreneBLC', 'sans-serif'],
      },
       fontSize: {
        'heading-h1': ['52px', '60px'],
        'heading-h2': ['44px', '52px'],
        'heading-h3': ['36px', '44px'],
        'heading-h4': ['26px', '32px'],
        'paragraph-p1': ['16px', '24px'],
        'paragraph-p2': ['14px', '22px'],
        'subheading-s1': ['14px', '20px'],
        'subheading-s2': ['18px', '24px'],
        'subheading-s3': ['12px', '18px'],
        'caption-c1': ['11px', '17px'],
        'footer-f1': ['10px', '20px'],
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'bold': 700,
      },
      screens: {
        'md': '900px',
        'lg': '1240px',
        'xl': '1550px',
      },
      maxWidth: {
        '820': '820px',
      },
      borderWidth: {
        '1.5': '1.5px',
      },
    },
  },
  plugins: [],
}

