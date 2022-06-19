const { description } = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Wiki',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'es-ES', // this will be set as the lang attribute on <html>
            title: 'VuePress',
            description: 'Vue Sitio web'
        },
        '/en/': {
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator'
        },
    },
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        locales: {
            '/': {
                // text for the language dropdown
                selectText: 'Idioma',
                // label for this locale in the language dropdown
                label: 'Español',
                // Aria Label for locale in the dropdown
                ariaLabel: 'Idioma',
                // text for the edit-on-github link
                editLinkText: 'Edit this page on GitHub',
                // config for Service Worker
                serviceWorker: {
                    updatePopup: {
                        message: "Nuevo contenido disponible.",
                        buttonText: "Refrescar"
                    }
                },
                // algolia docsearch options for current locale
                algolia: {},
                nav: [{
                        text: 'Guía',
                        link: '/guide/',
                    },
                    {
                        text: 'Config',
                        link: '/config/'
                    },
                    {
                        text: 'VuePress',
                        link: 'https://v1.vuepress.vuejs.org'
                    },
                    {
                        text: 'jugon.es',
                        link: 'https://rubru94.github.io/jugon.es/'
                    }
                ],
                sidebar: {
                    '/guide/': [{
                        title: 'Guía',
                        collapsable: false,
                        children: [
                            '',
                            'git/',
                            'github/'
                        ]
                    }],

                },
            },
            '/en/': {
                selectText: 'Language',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [{
                        text: 'Guide',
                        link: '/en/guide/',
                    },
                    {
                        text: 'Config',
                        link: '/config/'
                    },
                    {
                        text: 'VuePress',
                        link: 'https://v1.vuepress.vuejs.org'
                    },
                    {
                        text: 'jugon.es',
                        link: 'https://rubru94.github.io/jugon.es/'
                    }
                ],
                sidebar: {
                    '/en/guide/': [{
                        title: 'Guide',
                        collapsable: false,
                        children: [
                            '',
                            'git/',
                            'github/'
                        ]
                    }],

                },
            }
        }
    },
    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ],
}