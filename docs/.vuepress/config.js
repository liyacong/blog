module.exports = {
    title: 'LYC の Blog',
    base: '/liyacong.github.io/',
    head:[
      ['link', {rel:'icon', href:'/favicon.ico'}]
    ],
    description: '记录前端生活',
    // theme: require.resolve('../../packages/vuepress-theme-reco'),
    // theme: 'reco',
    
    theme: 'reco',
    themeConfig: {
      type: 'blog',
      authorAvatar: '/images/photo.jpg',
      logo: '/images/photo.jpg',
       // 博客设置
      blogConfig: {
        category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: 'Category' // 默认 “分类”
        },
        tag: {
          location: 3, // 在导航栏菜单中所占的位置，默认3
          text: 'Tag' // 默认 “标签”
        }
     },
      nav: [
      // 网站导航
        { text: 'Home', link: '/', icon: 'reco-home'},
        // { text: '分类', link: '' },
        // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
        { text: 'GitHub', link: 'https://github.com/liyacong/blog' },
        // { text: 'sidebar', link: '/views/sidebar/' },
        // { text: 'sidebar', link: '/views/sidebargroup/' }
      ],
      sidebar: {
        '/views/sidebar/': [
          '',
          'bar1',
          'bar2'
        ],
        '/views/sidebargroup/': [
          {
            title: '基础',
            collapsable: true,
            children: [
              '',
              'bar1'
            ]
          },
          {
            title: '进阶',
            collapsable: true,
            children: [
              'bar2'
            ]
          },
        ]
      },
      // 搜索设置
      search: true,
      searchMaxSuggestions: 10,
      // 自动形成侧边导航
      // sidebar: 'auto',
      sidebarDepth: 4,
      // 最后更新时间
      lastUpdated: 'Last Updated',
      // 作者
      author: 'reco_luan',
      // 备案号
      record: 'xxxx',
      // 项目开始时间
      startYear: '2020/09/18',
      /**
       * 密钥 (if your blog is private)
       */
      // friendLink: [
      //   {
      //     title: '午后南杂',
      //     desc: 'Enjoy when you can, and endure when you must.',
      //     email: '1156743527@qq.com',
      //     link: 'https://www.recoluan.com'
      //   },
      //   {
      //     title: 'vuepress-theme-reco',
      //     desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      //     avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //     link: 'https://vuepress-theme-reco.recoluan.com'
      //   },
      // ],
  }

}