import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// On Vercel, fall back to the project's production domain when VITE_SITE_URL is not set,
// so the canonical link and share-card URLs in index.html are never left empty.
if (!process.env.VITE_SITE_URL && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
  process.env.VITE_SITE_URL = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
}

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: false },
});
