import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this repo from main:/docs at /Web-Porfolio/
  base: '/Web-Porfolio/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
  build: {
    // Build straight into docs/ so GitHub Pages (main:/docs) can serve it
    outDir: 'docs',
    emptyOutDir: true,
  },
})
