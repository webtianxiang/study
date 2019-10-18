module.exports = {
  title: 'web_翔的进阶之路',
  description: '夜空中最闪亮的星！！！',
  dest: './dist',
  base: '/study/', // 设置仓库路径
  repo: 'https://github.com/webtianxiang/study',
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top'
  ],
  head: [['link', { rel: 'icon', href: './public/logo.ico' }]],
  themeConfig: {
    nav: [
      {
        text: '百度',
        link: 'https://baidu.com'
      },
      {
        text: '谷歌',
        link: 'https://google.com'
      }
    ],
    sidebar: [
      {
        title: 'JS学习',   // 必要的
        path: '../js/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/js/export',
          '/js/深入js变量',
          '/js/解构赋值'
        ]
      },
      {
        title: 'CSS学习',   // 必要的
        path: '../css/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/js/export',
          '/js/深入js变量',
          '/js/解构赋值'
        ]
      },
      {
        title: 'Vue学习',   // 必要的
        path: '../vue/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/js/export',
          '/js/深入js变量',
          '/js/解构赋值'
        ]
      }
    ],
    sidebarDepth: '2'
  }
}