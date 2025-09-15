import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    allowedHosts: ['rootcause.m3str3.com','rootcause.sh', 'localhost', '127.0.0.1'],
  },
  server: {
    allowedHosts: ['rootcause.m3str3.com','rootcause.sh', 'localhost', '127.0.0.1'],
  },
});
