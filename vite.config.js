import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/demo-aplicaciones/firmas-ecuador/',
  server: { port: 5194 },
})
