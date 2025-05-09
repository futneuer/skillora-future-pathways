import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Allow external connections
    port: 8010,
    cors: {
      origin: "*" // Enable CORS for all origins
    },
    strictPort: true,
    hmr: {
      clientPort: 8010,
      protocol: 'ws'
    },
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.ply.gg',
      '.gl.at.ply.gg',
      '192.168.1.26'
    ]
  },
  preview: {
    port: 8010,
    host: "0.0.0.0",
    cors: {
      origin: "*"
    },
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.ply.gg',
      '.gl.at.ply.gg',
      '192.168.1.26'
    ]
  },
  plugins: [
    react(),
    process.env.NODE_ENV !== 'production' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});