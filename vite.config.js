import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://benchmarkco.github.io/front/",
  plugins: [react()]
})
