module.exports = {
  // 删除未使用的 css
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        login: 'url("./src/assets/login/bg.png")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
