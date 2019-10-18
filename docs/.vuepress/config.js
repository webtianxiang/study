module.exports = {
  title: 'web_翔的进阶之路',
  description: '夜空中最闪亮的星！！！',
  dest: '../../dist',
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
      },
      {
        text: '实习日志',
        ariaLabel: 'Language Menu',
        items: [
          { text: '实习第一个月', link: '/log/first-month/' },
          { text: '实习第二个月', link: '/log/second-month/' },
          { text: '实习第三个月', link: '/log/third-month/' },
          { text: '学习计划', link: '/log/plan/' },
        ]
      }
    ],
    sidebar: {
      '/js/': [
        'export',
        '深入js变量',
        '解构赋值'
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
      ],
      '/log/plan/': [
        'Q4-OKR-田翔',
        '20190911心得体会'
      ],
      '/log/first-month/': [
        '20190722day01','20190723day02','20190724day03','20190725day04','20190726day05',
        '20190729day06','20190730day07','20190731day08','20190801day09','20190802day10','20190804day11',
        '20190805day12','20190806day13','20190807day14','20190808day15','20190809day16',
        '20190812day17','20190813day18','20190814day19','20190815day20','20190816day21',
        '20190819day22','20190820day23','20190821day24','20190822day25'
      ],
      '/log/second-month/': [
        '20190823day26',
        '20190826day27','20190827day28','20190828day29','20190829day30','20190830day31','20190901day32',
        '20190902day33','20190903day34','20190904day35','20190905day36','20190906day37',
        '20190909day38','20190910day39','20190911day40','20190912day41',
        '20190916day42','20190917day43','20190918day44','20190919day45','20190920day46'
      ],
      '/log/third-month/': [
        '20190923day47','20190924day48','20190925day49','20190926day50','20190927day51','20190929day52',
        '20190930day53',
        '20191008day54','20191009day55','20191010day56','20191011day57','20191012day58',
        '20191014day59','20191015day60','20191016day61','20191017day62'
      ]
    },
    sidebarDepth: 3,
    // displayAllHeaders: true,
    activeHeaderLinks: false,
  }
}