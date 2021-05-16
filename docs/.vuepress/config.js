module.exports = {
  title: '极客猿',
  description: '欢迎来到极客猿的博客',
  themeConfig: {
    displayAllHeaders: true,
    sidebar: 'auto',
    // logo: '/assets/img/head.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/article/' },
      {
        text: '大前端',
        items: [
          {
            text: 'CSS',
            link: '/front-end/css/',
          },
          {
            text: 'JavaScript',
            items: [
              { text: 'API', link: '/front-end/javascript/api' },
              { text: 'Vue', link: '/front-end/javascript/vue/' },
              { text: 'React', link: '/front-end/javascript/react/' },
              { text: 'Node', link: '/front-end/javascript/node/' },
              { text: 'TypeScript', link: '/front-end/javascript/typescript' },
            ],
          },
          {
            text: '多端开发',
            items: [
              { text: 'Flutter', link: '/front-end/muitl-platform/flutter/' },
              {
                text: 'ReactNavite',
                link: '/front-end/muitl-platform/react-native',
              },
              { text: 'Taro', link: '/front-end/muitl-platform/taro' },
              { text: 'Uniapp', link: '/front-end/muitl-platform/uniapp' },
              { text: '微信开发', link: '/front-end/muitl-platform/wechat' },
            ],
          },
        ],
      },
      {
        text: '后端',
        items: [
          {
            text: '编程语言',
            items: [
              { text: 'PHP', link: '/back-end/php/' },
              { text: 'Python', link: '/back-end/python/' },
              { text: 'Java', link: '/back-end/java/' },
            ],
          },
          {
            text: '服务器',
            items: [
              { text: 'Nginx', link: '/back-end/nginx/' },
              { text: 'Appche', link: '/back-end/appche/' },
              { text: 'LVS', link: '/back-end/lvs/' },
            ],
          },
          {
            text: '数据库',
            items: [
              { text: 'Mysql', link: '/back-end/mysql' },
              { text: 'Mongodb', link: '/back-end/mongodb' },
              { text: 'GraphQL', link: '/back-end/graphql' },
              { text: 'Redis', link: '/back-end/redis' },
            ],
          },
        ],
      },
      {
        text: '计算机',
        items: [
          { text: 'HTTP', link: '/computers/http' },
          { text: 'VB', link: '/computers/vb' },
          { text: '数据结构与算法', link: '/computers/data-structure' },
          {
            text: '操作系统',
            items: [
              { text: 'Window', link: '/computers/window' },
              { text: 'Mac', link: '/computers/mac' },
              { text: 'Linux', link: '/computers/linux' },
            ],
          },
          {
            text: '开发工具',
            items: [
              { text: 'VSCode', link: '/computers/vscode' },
              { text: 'Git', link: '/computers/git' },
              { text: 'AndroidStudio', link: '/computers/android-studio' },
            ],
          },
        ],
      },
      {
        text: '产品',
        items: [
          {
            text: '设计',
            items: [
              {
                text: 'PS',
                link:
                  'https://www.adobe.com/products/photoshop/free-trial-download.html',
              },
              {
                text: 'AI',
                link:
                  'https://www.adobe.com/products/illustrator/free-trial-download.html',
              },
              { text: 'XD', link: 'https://www.adobe.com/products/xd.html' },
            ],
          },
          {
            text: '原型',
            items: [
              { text: 'Axure', link: 'https://www.axure.com.cn/' },
              { text: 'Figma', link: 'https://www.figma.com/' },
            ],
          },
        ],
      },
      { text: '阅读', link: '/read/' },
      { text: 'Github', link: 'https://github.com/geekape' },
    ],
    sidebar: [
      {
        title: 'React', // 必要的
        path: '/front-end/javascript/react/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          '',
          'mbox',
          'react-navite',
          'react-router',
          'redux',
          'nextjs',
        ],
      },
    ],
  },
};
