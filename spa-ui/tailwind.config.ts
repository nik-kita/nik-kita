import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  important: "#root",
  corePlugins: {
    preflight: false,
  },
  plugins: [],
} satisfies Config;
