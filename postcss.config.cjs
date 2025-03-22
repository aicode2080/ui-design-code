module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    // tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
