import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { navbar } from './navbar'

export default defineConfig({
    // These are app level configs.
    title: 'Joying',
    description: 'Joying Life',
    base: "/joying-life/",
    lastUpdated: true,
    cleanUrls: true,
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.svg',
        }],
        ['meta', { name: 'theme-color', content: '#3c8772' }],
    ],
    themeConfig: {
        nav: navbar,
        sidebar: sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/augusmeow/joying-life' },
        ],
        editLink: {
            pattern: 'https://github.com/augusmeow/joying-life/tree/master/src/:path',
            text: '在 Github 编辑',
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Augus'
        },
        lastUpdatedText: '上次更新',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        darkModeSwitchLabel: '主题色切换',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '切换语言',
        outlineTitle: '本页内容',

    }
})
