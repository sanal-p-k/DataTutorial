import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        // Enable CORS for development
        cors: true,
    },
    // For production build
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                manualChunks: {
                    // Split vendor code into separate chunk
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                },
            },
        },
    },
    // Base public path when served in production
    base: '/',
});
