import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import './prism-language-otter';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'The Otter Programming Language',
  tagline: 'Compiled, statically typed, with transparent Rust interop',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'otterlang', // Usually your GitHub org/user name.
  projectName: 'otterlang-website', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
