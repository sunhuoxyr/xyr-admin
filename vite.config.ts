import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { viteMockServe } from 'vite-plugin-mock';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'icon',
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: command === 'serve',
      prodEnabled: command !== 'serve',
      logger: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssImport(), tailwindcss(), autoprefixer()],
    },
  },
}));
