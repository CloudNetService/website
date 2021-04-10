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
  stylesheets: [],
  scripts: [
    {
      src: 'https://webstats.cloudnetservice.eu/js/plausible.js',
      async: true,
      defer: true,
      'data-domain': 'cloudnetservice.eu'
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
          to: 'blog/',
          activeBasePath: 'blog',
          label: 'Blog',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'localeDropdown',
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
        {
          title: 'Legal',
          items: [
            {
              label: 'Imprint',
              to: 'imprint'
            },
            {
              label: 'Data Privacy',
              to: 'privacy'
            }
          ]
        }
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
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        redirects: [
          {
            to: '/docs/3.3/',
            from: '/docs/'
          }
        ]
      },
    ],
  ]
};