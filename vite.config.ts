import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: '/Korzystanie-JS-SDK/',
    plugins: [    
        tailwindcss(),  
    ],
})