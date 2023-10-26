import WindiCSS from 'vite-plugin-windicss'
import dotenv from 'dotenv';

dotenv.config({ path: '.env.production' });

export default {
  plugins: [
    WindiCSS(),
  ],
  base: process.env.VITE_BASE_URL || '/'
}