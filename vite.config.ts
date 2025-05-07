
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0", // Allow external connections
    port: 8020, // Use port 8020 as requested by the user
    cors: true, // Enable CORS for all origins
    strictPort: true, // Don't try another port if 8020 is taken
    https: {
      // Enable HTTPS for development
      key: null, // Auto-generated key
      cert: null, // Auto-generated certificate
    },
    hmr: {
      clientPort: 8020, // Ensure proper HMR on port forwarded environments
      protocol: 'wss', // Use secure WebSockets
    },
  },
  preview: {
    port: 8020, // Use port 8020 for preview as well
    host: "0.0.0.0", // Allow external preview
    https: true, // Enable HTTPS for preview
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
