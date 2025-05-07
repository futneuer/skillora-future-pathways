
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0", // Allow external connections
    port: 8020, // Changed port to 8020
    cors: true, // Enable CORS for all origins
    strictPort: true, // Don't try another port if 8020 is taken
    hmr: {
      clientPort: 8020, // Ensure proper HMR on port forwarded environments
    },
  },
  preview: {
    port: 8020, // Changed port to 8020
    host: "0.0.0.0", // Allow external preview
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
