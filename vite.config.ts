
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Allow external connections
    port: 8080, // Use port 8080 as required
    cors: true, // Enable CORS for all origins
    strictPort: true, // Don't try another port if 8080 is taken
    https: true, // Enable HTTPS for development (using auto-generated cert)
    hmr: {
      clientPort: 8080, // Ensure proper HMR on port forwarded environments
      protocol: 'wss', // Use secure WebSockets
    },
  },
  preview: {
    port: 8080, // Use port 8080 for preview as well
    host: "0.0.0.0", // Allow external preview
    https: true, // Enable HTTPS for preview
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
