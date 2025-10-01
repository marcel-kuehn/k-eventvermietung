import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";
import vercel from "@astrojs/vercel";

process.env = { ...process.env, ...loadEnv("", process.cwd(), "") };
const { STORYBLOK_DELIVERY_API_TOKEN, DEV } = process.env;
if (!STORYBLOK_DELIVERY_API_TOKEN)
  throw new Error(
    "STORYBLOK_DELIVERY_API_TOKEN is not defined in environment variables"
  );

const VERSION = DEV ? "draft" : "published";
const ENVIRONMENT_SPECIFIC_CONFIGS = {
  draft: {
    output: "server",
    adapter: vercel(),
  },
  published: {
    output: "static",
  },
};

const ENVIRONMENT_SPECIFIC_INTEGRATIONS = {
  draft: {
    livePreview: true,
  },
  published: {},
};

export default defineConfig({
  site: "https://k-eventvermietung.de",
  ...ENVIRONMENT_SPECIFIC_CONFIGS[VERSION],
  integrations: [
    sitemap(),
    storyblok({
      accessToken: STORYBLOK_DELIVERY_API_TOKEN,
      apiOptions: {
        region: "eu",
      },
      ...ENVIRONMENT_SPECIFIC_INTEGRATIONS[VERSION],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
