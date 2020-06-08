module.exports = {
    title: '北山秋叶',
    description: '北山秋叶的博客',
    base: '/blog/',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/assets/favicon.ico'
            }
        ]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@': '../.vuepress',
                '@assets': './public/assets',
                '@public': './public',
            }
        }
    },
    themeConfig: {
        logo: '/assets/img/user-logo.jpg',
        navbar: true,
        sidebar: 'auto',

        //search config
        search: true,
        searchMaxSuggestions: 10,
        //显示最后更新时间
        lastUpdated: 'Last Updated', // string | boolean
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/qszy1210/coder-log-vuepress',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        smoothScroll: true,
        displayAllHeaders: true,
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: '前端',
                link: '/frontend/'
            },
            {
                text: '感悟',
                link: '/thinking/'
            },
            {
                text: "生活",
                link: 'life',
                items: [{
                        text: '做饭',
                        link: '/life/cook/'
                    },
                    {
                        text: '宠物',
                        link: '/life/cat/'
                    },
                ]
            },

        ],
        sidebar: {
            '/frontend/': [
                "",
                "react",
                {
                    title: "分组",
                    path: 'react1',
                    sidebarDepth: 1,
                    children: [
                        'react3',
                    ]
                }
            ],
            '/thinking/': [""],
            '/life/': [''],
            '/': [
                "",
                "about"
            ],
        }
    },
    // locales: {
    //     // 键名是该语言所属的子路径
    //     // 作为特例，默认语言可以使用 '/' 作为其路径。
    //     '/': {
    //         lang: 'zh-CN',
    //         title: '代码人生',
    //         //   description: 'Vue 驱动的静态网站生成器'
    //     },
    //     '/en/': {
    //         lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //         title: 'CoderLife',
    //         //   description: 'Vue-powered Static Site Generator'
    //     },
    // },
    plugins: [
        '@vuepress/last-updated',
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/google-analytics',
        {
            'ga': 'UA-00000000-0' // UA-00000000-0
        },
        '@vuepress/medium-zoom',
        '@vuepress/nprogress'
    ]
}