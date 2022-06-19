// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CloudNetService',
  tagline: 'The CloudNet Network Environment Technology',
  url: 'https://cloudnetservice.eu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'CloudNetService',
  projectName: 'website',

  i18n: {
    defaultLocale: 'en',
    locales: ['en','de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
          ({ docPath }) => `https://github.com/CloudNetService/website/blob/main/docs/${docPath}`,
        },
        blog: {
          showReadingTime: true,
          editUrl:
          ({ blogPath }) => `https://github.com/CloudNetService/website/blob/main/docs/${blogPath}`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CloudNetService',
        logo: {
          alt: 'CloudNetService Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.cloudnetservice.eu',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CloudNetService',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/CloudNetService',
              },
              {
                label: 'SpigotMC',
                href: 'https://www.spigotmc.org/resources/cloudnet-v3-the-cloud-network-environment-technology.42059/',
              },
            ],
          },
          // TODO: add legal links
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CloudNetService`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
