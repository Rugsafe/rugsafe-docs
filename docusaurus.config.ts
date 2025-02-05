import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'RugSafe Documentation',
  tagline: 'A Multichain Protocol for Recovering from and Defending against Rug Pulls',
  favicon: 'img/rugsafe_character_black_background.png',

  // Set the production url of your site here
  url: 'https://docs.rugsafe.com',
  baseUrl: '/rugsafe-docs', // was /

  organizationName: 'rugsafe',
  projectName: 'rugsafedocs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/rugsafe/rugsafedocs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/rugsafe-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'RugSafe Logo',
        src: 'img/rugsafe.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/rugsafe/rugsafedocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ecMQ2D6nsu',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/rugsafehq?s=21&t=clPGowj2XOJTyL8AfYq2tQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/rugsafe/rugsafedocs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RugSafe Protocol`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
