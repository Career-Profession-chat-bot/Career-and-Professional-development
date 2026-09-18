import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import express from 'express';
import { defineConfig, Plugin } from 'vite';
import dotenv from 'dotenv';
import { apiRouter } from './server/apiRouter';

dotenv.config();

function apiPlugin(): Plugin {
  return {
    name: 'careeros-api-server',
    configureServer(server) {
      server.middlewares.use(express.json({ limit: '10mb' }));
      server.middlewares.use('/api', (req, res, next) => {
        (apiRouter as any)(req, res, next);
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve('.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
