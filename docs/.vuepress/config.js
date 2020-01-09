module.exports = {
    locales:{
        '/': {
            lang: 'zh-CN',
            title: '空舟博客（临时）',
            description: '个人临时技术文档',
        },
        '/en/': {
            lang: 'en-US',
            title: 'hilo temporary blog',
            description: '',
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                algolia: {},
                nav: [
                    { text: '主页', link: '/' },
                    { text: '文档', link: '/mysql/introduction'}
                ],
                // sidebar: 'auto'
                sidebar: [
                    {
                        title: 'mysql', 
                        sidebarDepth: 2,
                        children: [
                            {
                                title: '设计规范',
                                path: '/mysql/introduction'
                            }
                        ]
                    }
                ]
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    { text: 'HomePage', link: '/en/' },
                    { text: 'Document', link: '/en/document/'}
                ],
            }
        }
    },
}