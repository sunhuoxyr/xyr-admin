const plugin = require('tailwindcss/plugin');

const createEnterPlugin = (maxOutput = 6) => {
  const createCss = (index = 1, d = 'x') => {
    const upD = d.toUpperCase();
    return {
      [`.enter-${d}:nth-child(${index})`]: {
        transform: `translate${upD}(50px)`,
      },
      [`.-enter-${d}:nth-child(${index})`]: {
        transform: `translate${upD}(-50px)`,
      },
      [`.enter-${d}:nth-child(${index}), .-enter-${d}:nth-child(${index})`]: {
        opacity: '0',
        animation: `enter-${d}-animation 0.4s ease-in-out 0.3s`,
        'animation-fill-mode': 'forwards',
        'animation-delay': `${(index * 1) / 20}s`,
      },
    };
  };
  const handler = ({ addBase }) => {
    let addRawCss = {};
    for (let index = 1; index < maxOutput; index++) {
      addRawCss = {
        ...addRawCss,
        ...createCss(index, 'x'),
        ...createCss(index, 'y'),
      };
    }
    addBase({
      ...addRawCss,
      '@keyframes enter-x-animation': {
        to: {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      '@keyframes enter-y-animation': {
        to: {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    });
  };
  return handler;
};

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
  plugins: [plugin(createEnterPlugin())],
};
