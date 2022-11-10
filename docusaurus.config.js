// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// GitHub pages deployment config.
// If you aren't using GitHub pages, you don't need these.
const organizationName = 'baeda-polito' // Usually your GitHub org/user name.
const projectName = 'polito-bos-docs' // Usually your repo name.

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PolitoBOS',
    tagline: 'A Building Operating System for Politecnico di Torino',
    url: `https://${organizationName}.github.io`,
    baseUrl: `/${projectName}/`,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName, // Usually your GitHub org/user name.
    projectName, // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
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
                    editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
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
                title: 'PolitoBOS',
                logo: {
                    alt: 'PolitoBOS Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Docs',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        type: 'localeDropdown',
                        position: 'right'
                    },
                    // {
                    //     type: 'docsVersionDropdown',
                    //     position: 'right'
                    // },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Website',
                                href: 'http://www.baeda.polito.it/',
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
                                href: `https://github.com/${organizationName}/${projectName}`,
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()}, Roberto Chiosa, BAEDA Lab. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
