import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,

  tanstackStart: {
    server: { entry: "server" },

    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      autoSubfolderIndex: true,
    },
  },
});
