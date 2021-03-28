module.exports = {
  title: 'CloudNetService',
  tagline: 'The CloudNet Network Environment Technology',
  url: 'https://cloudnetservice.eu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cloudnetservice', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Material+Icons",
  ],
  scripts: [
    {
      src: 'https://webstats.cloudnetservice.eu/js/plausible.js',
      async: true,
      defer: true,
      'data-domain': 'cloudnetservice.dev'
    },
    {
      src: 'https://offen.cloudnetservice.eu/script.js',
      async: true,
      'data-account-id': '909677c6-44ea-4f33-aa5b-b30a09d9e7e3'
    }
  ],
  themeConfig: {
    navbar: {
      title: 'CloudNetService',
      logo: {
        alt: 'CloudNetService Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/3.3/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/cloudnetservice/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'CloudNet v3',
              to: 'docs/3.3/',
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
              label: 'GitHub',
              href: 'https://github.com/CloudNetService',
            },
            {
              label: 'SpigotMC',
              href: 'https://www.spigotmc.org/resources/cloudnet-v3-the-cloud-network-environment-technology.42059/'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CloudNetService. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/cloudnetservice/website/edit/development/',
          includeCurrentVersion: false,
          versions: {
            "3.3": {
              "label": "CloudNet v3",
              "path": "3.3"
            },
            /*"2.2": {
              "label": "CloudNet v2",
              "path": "2.2"
            }*/
          },
          lastVersion: "3.3",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
              'https://github.com/cloudnetservice/website/edit/development/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      de: {
        label: 'Deutsch'
      }
    }
  }
};