module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1234px',
    },
    extend: {
      backgroundImage: {
        'unsplash': "url(https://media.istockphoto.com/id/1448381278/photo/the-side-view-of-a-large-gray-craftsman-new-construction-house-with-a-landscaped-yard-a-three.jpg?b=1&s=170667a&w=0&k=20&c=pHHNxKMgY-i5VMo9nd4viatxxhGVbD8X6ZUwRqQlwVw=)",
      },
      colors: {
        primary: '#101828',
        secondary: '#7F56D9',
      },
      boxShadow: {
        1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
