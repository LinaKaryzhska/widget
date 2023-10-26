import WindiCSS from 'vite-plugin-windicss'
import dotenv from 'dotenv';

dotenv.config({ path: '.env.production' });

export default {
  plugins: [
    WindiCSS(),
  ],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: `assets/main.js`,
        assetFileNames: (assetInfo) => {
          console.log(assetInfo.name);
          if (assetInfo.name === 'index.css') return 'assets/styles.css';
          return assetInfo.name;
        },
      }
    }
  },
  base: process.env.VITE_BASE_URL || '/'
}