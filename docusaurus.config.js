// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'STFIL Docs',
  tagline: 'STFIL are cool',
  url: 'https://stfil.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'STFIL', // Usually your GitHub org/user name.
  projectName: 'STFIL Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'/*, 'zh'*/],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // 如果你不需要覆盖默认值，你可以忽略这个语言（比如 zh-Hans）
      // "zh": {
      //   htmlLang: 'cn-ZH',
      // },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: '',
        logo: {
          alt: 'STFIL Logo',
          src: 'img/logo.svg',
          href: '#',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/stfil-io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/introduction',
              },
              {
                label: 'FAQ',
                to: 'docs/overview/stfil',
              },
              {
                label: 'FDO',
                to: 'docs/fdo/governance/info',
              },
            ],
          },
              {
                title: 'Social Links',
                items: [
                  {
                    label: 'GitHub',
                    to: 'https://github.com/stfil-io',
                  },
                  {
                    label: 'Forum',
                    to: 'https://forum.stfil.io',
                  },
                    {
                        label: 'Twitter',
                        to: 'https://twitter.com/stfil_io',
                    },
                ],
              },
          {
            title: 'Learn',
            items: [
              {
                label: 'Introduction',
                to: 'https://www.stfil.io/terms/',
              },
              {
                label: 'Guides',
                to: 'https://www.stfil.io/privacy/',
              },
              {
                label: 'Developers',
                to: 'https://www.stfil.io/privacy/',
              },
            ],
          },
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Terms & Conditions',
                to: 'https://www.stfil.io/terms/',
              },
              {
                label: 'Privacy Policy',
                to: 'https://www.stfil.io/privacy/',
              },
            ],
          },
          ],
        logo: {
          alt: 'STFIL Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/logo.svg',
          width: 200,
          href: 'https://www.stfil.io',
        },
        copyright: `Copyright © ${new Date().getFullYear()} STFIL All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
