// @ts-check
const lightCodeTheme = require("./light.theme.js");
const darkCodeTheme = require("./dark.theme.js");
const { remarkCodeHike } = require("@code-hike/mdx");
/** @type {import('@docusaurus/types').Config} */
module.exports = async function config() {
  const math = (await import("remark-math")).default;
  const katex = (await import("rehype-katex")).default;
  return {
    title: "Warp Docs",
    tagline: "The official docs for Warp",
    url: "https://docs.warp.money",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "terra-money", // Usually your GitHub org/user name.
    projectName: "warp-docs", // Usually your repo name.
    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },
    plugins: [
      'docusaurus-plugin-sass', 
    [
      require.resolve("@gabrielcsapo/docusaurus-plugin-matomo"),
      {
        siteId: "3",
        matomoUrl: "https://terradocs.matomo.cloud/",
        siteUrl: "https://docs.warp.money",
      },
    ],
  ],
    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            beforeDefaultRemarkPlugins: [
              [
                remarkCodeHike,
                {
                  theme: "poimandres",
                  lineNumbers: true,
                  showCopyButton: true,
                  staticMediaQuery: "not screen, (max-width: 768px)",
                },
              ],
              math,
            ],
            rehypePlugins: [katex],
            sidebarPath: require.resolve("./sidebars.js"),
            routeBasePath: "/", // Serve the docs at the site's root
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: "https://github.com/terra-money/warp-docs/tree/main",
          },
          blog: false,
          theme: {
            customCss: [
              require.resolve("@code-hike/mdx/styles.css"),
              require.resolve("./src/styles/main.scss"),
              require.resolve("katex/dist/katex.min.css"),
            ],
          },
        }),
      ],
    ],
    themes: ["mdx-v2"],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/logo/twitter-profile.png',
        docs: {
          sidebar: {
            hideable: false,
            autoCollapseCategories: false,
          },
        },
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        navbar: {
          logo: {
            alt: "Warp Docs",
            src: "img/logo/wdotcircle.svg",
            srcDark: "img/logo/wdotsquare.svg",
          },
          items: [
            {
              href: "https://docs.google.com/forms/d/e/1FAIpQLSeYGdWL9tIHC3BP2riYXtT_cyZVDMGKrrSH0JCPCdV3PtZGyg/viewform", //front-end URL
              position: "right",
              label: "Get in touch",
              className: "header-home-link",
              "aria-label": "Get in touch",
            },
            {
              href: "https://app.warp.money",
              position: "right",
              label: "Warp App",
              className: "header-terra-link",
              "aria-label": "Warp App",
            },
            {
              href: "https://github.com/terra-money/warp-docs",
              position: "right",
              className: "header-github-link",
              "aria-label": "GitHub repository",
            },
      
          ],
        },
        footer: {},
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
      stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity:
            'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
      ],
  };
};
