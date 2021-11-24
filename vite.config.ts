import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import IconsResolver from 'unplugin-icons/resolver';
import { viteMockServe } from 'vite-plugin-mock';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'icon',
          customCollections: ['local'],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
      customCollections: {
        local: FileSystemIconLoader('src/assets/icon'),
      },
    }),
    viteMockServe({
      // mock/_mockProdService.ts 中的 import.meta.globEager 会一直报错
      ignore: /^_/,
      mockPath: 'mock',
      // 默认设置
      // localEnabled: command === 'serve',
      // prodEnabled: command !== 'serve',
      // logger: true,
      injectCode: `
        import createProdMockServer from './mock/_mockProdService.ts';
        setupProdMockServer()
      `,
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssImport(), tailwindcss(), autoprefixer()],
    },
  },
}));
