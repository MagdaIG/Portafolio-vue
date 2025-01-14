import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()], // Plugin para Vue
    resolve: {
        alias: {
            '@': '/src', // Alias para usar '@' en lugar de '../src'
        },
    },
    server: {
        port: 5174,
    },
});