import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

const inputs = [];



export default defineConfig({
  plugins: [    
        tailwindcss(),  
    ],

  root: resolve(__dirname, 'src'),
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: inputs,
    },
    outDir: resolve(__dirname, 'dist'),
  },
})
