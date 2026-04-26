import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Ensure the slashes are exactly like this:
  base: command === 'build' ? '/INTERIOR-WEB/' : '/',
}))