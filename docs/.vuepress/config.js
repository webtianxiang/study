module.exports = {
  title: 'web_翔的进阶之路',
  description: '夜空中最闪亮的星！！！',
  // dest: '../blogs',
  dest: 'dist',
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
        text: 'js学习',
        link: '/js/'
      },
      {
        text: 'CSS学习',
        link: '/css/'
      },
      {
        text: 'Vue学习',
        link: '/vue/'
      },
      {
        text: '其他知识学习',
        link: '/other/'
      }
    ],
    sidebar: {
      '/js/': [
        'export',
        '深入js变量',
        '解构赋值',
        '使用set提高代码的性能',
        '类型、值和变量',
        '词法结构',
        '表达式和运算符',
        '语句',
        '数组',
        '对象'
      ],
      '/css/': [
        '纯CSS控制显示溢出',
        '栅格布局学习',
        'CSS权重学习',
        'flex布局学习'
      ],
      '/vue/': [
        '初入vue全家桶',
        '路由学习',
        '同步组件和异步组件学习',
        'vue中定时器的使用'
      ],
      '/other/': [
        '/other/git分布式管理系统学习',
        '/other/iaas、paas、saas学习',
        '/other/nginx代理服务的配置',
        '/other/npm包管理工具学习',          
        '/other/Submodule学习'
      ]
    },
    sidebarDepth: 3,
    // displayAllHeaders: true,
    activeHeaderLinks: false,
  }
}