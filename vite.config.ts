import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: 'all', // 👈 allows requests from Render and any domain
  },
  preview: {
    host: true, // 👈 lets Vite preview accept external connections
    port: 4173
  }
});
