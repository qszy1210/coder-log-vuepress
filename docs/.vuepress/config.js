module.exports = {
    title: '北山秋叶',
    description: '北山秋叶的博客',
    base: '/coder-log-vuepress/',
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
        // sidebarDepth: 1,

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
                text: '利器',
                link: '/tool/'
            },
            {
                text: '感悟',
                link: '/thinking/'
            },
            {
                text: "生活",
                link: '/life/',
            },

        ],
        sidebar: {
            '/frontend/': [
                "",
                {
                    title: 'javascript',
                    path: '/frontend/js/',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'js/2018-08-04-js数组删除多个元素的方法',
                        'js/2018-08-04-js隐士转换',
                        'js/2019-07-16-flat-array',
                        'js/2018-08-04-js数组删除多个元素的方法',
                        'js/2018-08-04-js隐士转换',
                        'js/2018-11-26-thunk函数在generator中的应用',
                        'js/2019-03-09-多个异步保持队列的方法',
                        'js/2019-04-09-数组去重的两个小技巧',
                        'js/2019-04-09-js中的方法注入',
                        'js/2019-04-10-前端重要的几个东西',
                        'js/2019-04-16-再说js隐式转换',
                        'js/2019-04-17-一个闭包的小问题',
                        'js/2019-04-20-js中的异步队列(micro&macro)',
                        'js/2019-05-07-javascript优先级的一个注意点',
                        'js/2019-05-20-javacript中的进制标识',
                        'js/2019-05-22-解析全等注意事项',
                        'js/2019-06-06-Object-prototype-may-only-be-an-Object-or-null-undefined',
                        'js/2019-06-09-array-curry',
                        'js/2019-06-13-js-取反',
                        'js/2019-06-25-parseInt的有趣研究',
                        'js/2019-06-26-js中几个基础函数的研究',
                        'js/2019-07-03-遍历数组-复制数组-迭代对象',
                        'js/2019-08-03-bitadd',
                        'js/2019-08-05-ast',
                        'js/2019-08-05-proxy-sample',
                        'js/2019-08-06-input处理中文输入的问题',
                        'js/2019-08-07-文件断点续传-前端和后端实现',
                        'js/2019-08-14-数字大于undefiend么',
                        'js/2019-09-18-es6箭头函数你真的理解了么',
                        'js/2019-09-27-instanceof-js-实现',
                        'js/2019-10-11-js-tofixed',
                        'js/2019-10-12-重新审视原型链',
                        'js/2019-10-12-js调试原理',
                        'js/2019-10-24-防抖和节流的区别',
                        'js/2019-10-28-test-case-example',
                        'js/2019-10-31-递归-循环',
                        'js/2019-11-28-利用proxy实现的简单的观察者模式',
                        // 'js/2019-11-28-javascript异步中非常容易忽视的一个细节(return await or return promise)',
                        'js/2019-12-11-cookie的获取',
                        'js/2019-12-12-怎么将typescript应用到自己写的js文件中',
                        'js/2019-12-17-javascript-switch-equal',
                        'js/2019-12-18-function-scope',
                        'js/2019-12-20-js中的表达式和声明-1',
                        'js/2019-12-24-configurable-的一个小问题',
                        'js/2019-12-31-词法作用域',
                        'js/2019-12-31-promise的神奇',
                        'js/2020-02-13-通过null进行isNil的判断',
                        'js/2020-02-13-new内置对象的一些东东',
                        'js/2020-02-20-asyncify方法',
                        'js/2020-02-21-代码习惯-Object-assign',
                        'js/2020-03-02-function-TDZ',
                        'js/2020-03-02-TDZ',
                        'js/2020-03-04-工作10多年-才真正理解什么是闭包',
                        'js/2020-03-10-兼容数组的小技巧',
                        'js/关于引用的一点注意',
                        'js/记录传递参数解析中的一个问题以及解决过程',
                        'js/静态和动态作用域',
                        'js/再谈reduce',
                        'js/js-test',
                        'js/promise的es5实现',
                        'js/super与箭头函数',
                    ]
                },
            ],
            '/tool/': [
                "",
            ],
            '/thinking/': [
                "",
                "2018-07-15-博客的开篇"
            ],
            '/life/': [
                '',
                {
                    title: '宠物',
                    path: '/life/cat/',
                    collapsable: true,
                    // sidebarDepth: 2,
                    children: [
                        'cat/cat1',
                    ]
                },


            ],
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