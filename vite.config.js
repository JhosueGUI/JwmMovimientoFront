import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Permite conexiones externas
    port: process.env.PORT || 8080, // Usa el puerto asignado por Railway
  }
});
