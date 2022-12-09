import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'


export default defineConfig({
    // These are app level configs.
    title: 'Joying',
    description: 'random thought',
    base: "/RandomThought/",
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.svg',
        }],
        ['meta', { name: 'theme-color', content: '#3c8772' }],
    ],
    themeConfig: {
        sidebar: sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/DrAugus/RandomThought' },
        ],
        editLink: {
            pattern: 'https://github.com/DrAugus/RandomThought/tree/master/src/:path',
            text: 'Suggest changes to this page',
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Augus'
        },

    }
})
