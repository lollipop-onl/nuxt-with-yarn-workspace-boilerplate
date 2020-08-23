import { NuxtConfig } from '@nuxt/types';
import path from 'path';

const config: NuxtConfig = {
  target: 'static',
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api'],
  build: {
    loaders: {
      scss: {
        sassOptions: {
          includePaths: [path.join(__dirname, 'assets/styles')],
        },
      },
    },
  },
  typescript: {
    typeCheck: {
      typescript: {
        configFile: path.join(__dirname, 'tsconfig.json'),
      },
    },
  },
};

export default config;
