import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import RubyPlugin from 'vite-plugin-ruby';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 200 }),
    // tsconfigPaths(),
  ],
  resolve: {
    alias: {
      components: resolve(__dirname, 'app/frontend/components'),
      pages: resolve(__dirname, 'app/frontend/pages'),
    },
  },
});
