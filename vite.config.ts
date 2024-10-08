import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
    base: '/weather/',
    build: {
        outDir: 'build',
    },
    plugins: [react(), svgr()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@app', replacement: path.resolve(__dirname, 'src/app') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@config', replacement: path.resolve(__dirname, 'src/config') },
            { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
            { find: '@layout', replacement: path.resolve(__dirname, 'src/layout') },
            { find: '@style', replacement: path.resolve(__dirname, 'src/style') },
            { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
        ],
    },
});
