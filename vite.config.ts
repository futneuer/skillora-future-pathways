import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Allow external connections
    port: 8010, // Changed port to 8010 as requested
    cors: {
      origin: "*" // Enable CORS for all origins
    },
    strictPort: true, // Don't try another port if 8010 is taken
    hmr: {
      clientPort: 8010, // Ensure proper HMR on port forwarded environments
      protocol: 'ws' // Use WebSocket protocol
    }
  },
  preview: {
    port: 8010, // Use port 8010 for preview as well
    host: "0.0.0.0", // Allow external preview
    cors: {
      origin: "*" // Enable CORS for preview
    }
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