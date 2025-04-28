import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    historyApiFallback: true // 🔥 รองรับ React Router พิมพ์ URL ตรง
  }
});
