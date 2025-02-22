import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const model = process.env.MODEL || '';

export default defineConfig({
  plugins: [react()],
  base: `/Portfilio/${model}/`, // Chemin de base dynamique
  build: {
    outDir: 'build', // Génère les fichiers dans un dossier "build"
  },
});