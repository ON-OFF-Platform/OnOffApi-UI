import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: parseInt(env.VITE_PORT) || 5173,
      proxy: {
        '/ws': {
          target: env.VITE_WS_URL || 'ws://localhost:8080',
          changeOrigin: true,
          ws: true,
        },
        '/api': {
		      target: env.VITE_API_URL || 'http://localhost:8080',
		      changeOrigin: true,
		      rewrite: (path) => path.replace(/^\/api/, ''),
		    },
      },
    },
  };
});
