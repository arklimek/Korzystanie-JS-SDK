import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
export default defineConfig({
    base: '/Korzystanie-JS-SDK/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'src/login.html'),
            }
        }
    },
    plugins: [    
        tailwindcss(),  
    ],
})