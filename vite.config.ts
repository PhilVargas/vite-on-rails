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
  // In order to import from our frontend files using relative imports,
  // we need to alias any top level folders
  // https://vite-ruby.netlify.app/config/index.html#watchadditionalpaths
  resolve: {
    alias: {
      components: resolve(__dirname, 'app/frontend/components'),
      pages: resolve(__dirname, 'app/frontend/pages'),
      layouts: resolve(__dirname, 'app/frontend/layouts'),
      images: resolve(__dirname, 'app/frontend/images'),
      types: resolve(__dirname, 'app/frontend/types'),
    },
  },
});
