import type { Config } from "@react-router/dev/config";

// Acá podemos conseguir los paths de las rutas que queremos prerenderizar

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  async prerender() {
    return [
      "/auth/login",
      "/auth/register",
      "/auth/testing",
      "/product/iphone",
      "/product/macbook",
      "/product/ipad",
      "/product/watch",
      "/product/airpods",
      "/product/airtag",
      "/product/airtag",
    ];
  },
} satisfies Config;
