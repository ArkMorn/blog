module.exports = {
    title: '博客', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '博客', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    base: '/blog/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {    
        logo: '/logo.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            // {
            //     text: '分类',
            //     ariaLabel: '分类',
            //     items: [
            //         { text: '文章', link: '/pages/folder1/test1.md' },
            //         { text: '琐碎', link: '/pages/folder2/test4.md' },
            //     ]
            // },
            // { text: '功能演示', link: '/pages/folder1/test3.md' },
            // { text: 'Github', link: 'https://github.com/ArkMorn' },
        ],
        sidebar: {
            // '/pages/folder1/':[
            //     {
            //         title: '测试菜单4',   // 必要的
            //         collapsable: false, // 可选的, 默认值是 true,
            //         sidebarDepth: 1,    // 可选的, 默认值是 1
            //         children: [
            //             ['test1.md', '子菜单1'],
            //             ['test3.md', '子菜单2']
            //         ]
            //     },
            //     {
            //         title: '测试菜单2',
            //         collapsable: false, // 可选的, 默认值是 true,
            //         children: [
            //             ['test2.md', '子菜单1']
            //         ]
            //     }
            // ],
            '/pages/web/':[
                {
                    title: 'web前端架构师',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['脚手架.md', '脚手架']
                    ]
                }
            ],
        }
    }
}