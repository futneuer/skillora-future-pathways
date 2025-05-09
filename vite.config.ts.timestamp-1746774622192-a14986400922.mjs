// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///home/project/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig({
  server: {
    host: "0.0.0.0",
    // Allow external connections
    port: 8010,
    // Changed port to 8010 as requested
    cors: true,
    // Enable CORS for all origins
    strictPort: true,
    // Don't try another port if 8010 is taken
    https: {
      // Use proper HTTPS configuration
      minVersion: "TLSv1.2"
      // Minimum TLS version
    },
    hmr: {
      clientPort: 8010,
      // Ensure proper HMR on port forwarded environments
      protocol: "wss"
      // Use secure WebSockets
    }
  },
  preview: {
    port: 8010,
    // Use port 8010 for preview as well
    host: "0.0.0.0",
    // Allow external preview
    https: {
      // Use proper HTTPS configuration for preview
      minVersion: "TLSv1.2"
      // Minimum TLS version
    }
  },
  plugins: [
    react(),
    process.env.NODE_ENV !== "production" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCIwLjAuMC4wXCIsIC8vIEFsbG93IGV4dGVybmFsIGNvbm5lY3Rpb25zXG4gICAgcG9ydDogODAxMCwgLy8gQ2hhbmdlZCBwb3J0IHRvIDgwMTAgYXMgcmVxdWVzdGVkXG4gICAgY29yczogdHJ1ZSwgLy8gRW5hYmxlIENPUlMgZm9yIGFsbCBvcmlnaW5zXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSwgLy8gRG9uJ3QgdHJ5IGFub3RoZXIgcG9ydCBpZiA4MDEwIGlzIHRha2VuXG4gICAgaHR0cHM6IHtcbiAgICAgIC8vIFVzZSBwcm9wZXIgSFRUUFMgY29uZmlndXJhdGlvblxuICAgICAgbWluVmVyc2lvbjogJ1RMU3YxLjInLCAvLyBNaW5pbXVtIFRMUyB2ZXJzaW9uXG4gICAgfSxcbiAgICBobXI6IHtcbiAgICAgIGNsaWVudFBvcnQ6IDgwMTAsIC8vIEVuc3VyZSBwcm9wZXIgSE1SIG9uIHBvcnQgZm9yd2FyZGVkIGVudmlyb25tZW50c1xuICAgICAgcHJvdG9jb2w6ICd3c3MnLCAvLyBVc2Ugc2VjdXJlIFdlYlNvY2tldHNcbiAgICB9LFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogODAxMCwgLy8gVXNlIHBvcnQgODAxMCBmb3IgcHJldmlldyBhcyB3ZWxsXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsIC8vIEFsbG93IGV4dGVybmFsIHByZXZpZXdcbiAgICBodHRwczoge1xuICAgICAgLy8gVXNlIHByb3BlciBIVFRQUyBjb25maWd1cmF0aW9uIGZvciBwcmV2aWV3XG4gICAgICBtaW5WZXJzaW9uOiAnVExTdjEuMicsIC8vIE1pbmltdW0gVExTIHZlcnNpb25cbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbXBvbmVudFRhZ2dlcigpLFxuICBdLmZpbHRlcihCb29sZWFuKSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUpoQyxJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixZQUFZO0FBQUE7QUFBQSxJQUNaLE9BQU87QUFBQTtBQUFBLE1BRUwsWUFBWTtBQUFBO0FBQUEsSUFDZDtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsWUFBWTtBQUFBO0FBQUEsTUFDWixVQUFVO0FBQUE7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLE9BQU87QUFBQTtBQUFBLE1BRUwsWUFBWTtBQUFBO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVEsSUFBSSxhQUFhLGdCQUFnQixnQkFBZ0I7QUFBQSxFQUMzRCxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
