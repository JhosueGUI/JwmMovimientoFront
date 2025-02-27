import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    allowedHosts: ['.railway.app'], // Permite todos los subdominios de Railway
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080
  }
});
