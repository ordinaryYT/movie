import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true // ✅ Allow requests from any host (like Render)
  },
  preview: {
    host: true,        // ✅ Allow external access (needed for Render)
    port: 4173         // ✅ Default preview port (Render maps $PORT to this)
  }
});
