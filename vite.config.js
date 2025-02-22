import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Détermine le dossier du modèle en fonction d'une variable d'environnement
const model = process.env.MODEL || '';

export default defineConfig({
  plugins: [react()],
  base: `/Portfilio/${model}/`, // Définit un chemin dynamique
});
