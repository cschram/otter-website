import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import './prism-language-otter';

const config: Config = {
  title: 'The Otter Programming Language',
  tagline: 'Compiled, statically typed, with transparent Rust interop',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://otterlang.com',
  baseUrl: '/',
  organizationName: 'otterlang',
  projectName: 'otterlang.com',
  onBrokenLinks: 'throw',
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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      title: 'Otter',
      logo: {
        alt: 'OtterLang Logo',
        src: 'img/otter-icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
          href: '/docs/tutorial/getting-started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Language Reference',
          href: '/docs/language-reference/overview',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Standard Library',
          href: '/docs/standard-library/overview',
        },
        {
          href: 'https://github.com/jonathanmagambo/otterlang',
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
              to: '/docs/tutorial/getting-started',
            },
            {
              label: 'Rust FFI',
              to: '/docs/tutorial/rust-ffi',
            },
            {
              label: 'Language Reference',
              to: '/docs/language-reference/overview',
            },
            {
              label: 'Standard Library',
              to: '/docs/standard-library/overview',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/y3b4QuvyFk',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jonathanmagambo/otterlang',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OtterLang. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.gruvboxMaterialDark,
      darkTheme: prismThemes.gruvboxMaterialDark,
      additionalLanguages: ['bash', 'powershell']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
