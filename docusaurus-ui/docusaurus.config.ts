import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const logo = "img/nik-kita__vertical-transparent.png";
const favicon = "img/favicon.ico";
const card = "img/nik-kita__horizontal-light.png";

const config: Config = {
  themes: ["@docusaurus/theme-live-codeblock"],
  title: "nik-kita",
  tagline: "Nikita Moiseienko",
  favicon,
  url: "https://nik-kita.deno.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        pages: {
          path: "src/pages",
          routeBasePath: "",
          include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          mdxPageComponent: "@theme/MDXPage",
        },
        docs: {
          sidebarPath: "./sidebars.ts",
          showLastUpdateTime: true,
          sidebarCollapsed: true,
        },
        blog: {},
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: card,
    navbar: {
      title: "",
      logo: {
        alt: "logo",
        src: logo,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "brickyard_sidebar",
          position: "left",
          label: "Brickyard",
        },
        {
          type: "docSidebar",
          sidebarId: "sugar_ws_sidebar",
          position: "left",
          label: "SugarWs",
        },

        {
          type: "docSidebar",
          sidebarId: "karabiner_json_generator_sidebar",
          position: "left",
          label: "Karabiner generator",
        },
        {
          type: "docSidebar",
          sidebarId: "notes_sidebar",
          position: "left",
          label: "Notes",
        },
        { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "My accounts",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/nik-kita",
              src: "img/github.svg",
            },
            {
              label: "StackOverflow",
              href: "https://stackoverflow.com/users/14139506/nik-kita",
              src: "img/stackoverflow.svg",
            },
            {
              label: "NPM",
              href: "https://www.npmjs.com/~nik-kita",
              src: "img/npm.svg",
            },
          ],
        },
        {
          title: "Follow me on",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/nik-kita",
              src: "img/linkedin.svg",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/nikitamoiseienko/",
              src: "img/instagram.svg",
            },
          ],
        },
        {
          title: "My pets",
          items: [
            {
              label: "Brickyard",
              href: "/docs/brickyard/intro",
            },
            {
              label: "SugarWs",
              href: "/docs/sugar-ws/intro",
            },
            {
              label: "Karabiner config generator",
              href: "/docs/karabiner-json-generator/about",
            },
            {
              label: "This site",
              href: "/",
            },
          ],
        },
        {
          title: 'HelloWorld("print")',
          items: [
            {
              label: "CodeWars",
              href: "https://www.codewars.com/users/nik-kita",
              src: "img/codewars.svg",
            },
            {
              label: "CSS Battle",
              href: "https://cssbattle.dev/player/nik_kita",
              src: "img/cssbattle.svg",
            },
            {
              label: "HackerRank",
              href: "https://www.hackerrank.com/profile/nik_kita",
              src: "img/hackerrank.svg",
            },
            {
              label: "LeetCode",
              href: "https://leetcode.com/nik-kita",
              src: "img/leetcode.svg",
            },
          ],
        },
      ],
      copyright: `Copyright © ${
        new Date().getFullYear()
      } My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oceanicNext,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ["toml", "bash"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
