import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/spa',
  build: {
    assetsDir: 'spa/assets',
    outDir: 'dist/spa',
  },
  plugins: [react()],
})
