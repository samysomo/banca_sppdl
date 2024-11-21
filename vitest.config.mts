import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    isolate: true, // Asegura que cada test esté aislado
    sequence: { shuffle: false }, // Ejecuta los tests en orden
  },
})