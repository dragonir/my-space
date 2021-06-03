import pageConfApi from '../common/pageConfApi'

const config = {
  title: 'TRICELL',
  titleSuffix: 'TRICELL',
  // 界面右边，Github头像下的标语
  description: 'Hello World',
  // 界面右边，github头像下的链接按钮
  userLinks: [{
    title: 'GitHub',
    icon: 'user',
    url: 'https://github.com/dragonir'
  }],
  /**
   * 仓库如果在用户下，填 users
   * 如果在组织下，填 orgs
   */
  userType: 'users',
  /**
   * issue 仓库所在地
   */
  user: 'dragonir',
  userId: '21058931',
  repo: 'BLOG_ISSUE',
  // 请申请一个clientID
  clientID: 'c11664f8134b71a780cf',
  clientSecret: 'b16bff925f6d3c42a265d0bfb95f65fe31240291',
  Authorization: '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',
  /**
   * 在本博客显示的其他issue创建者
   * 项目所有者（组织仓库的话为所有组织成员）及COLLABORATOR默认会显示
   * 主要目的是为了方式他人恶意发issue污染博客内容
   */
  otherAuthors: [''],
  /**
   * 网易云音乐组件
   * 打开你想要的音乐，找到其 ID（在 URL 中有），填入进去
   * 因版权限制，许多歌都用不成，这个没有好的解决办法
   * 不会自动播放，这样影响用户体验
   */
  netEaseMusicID: '1472921626',
  /**
   * Gitalk 配置项
   * 请不要填写 owner，repo，clientID，clientSecret 字段
   * 会自动引用本config的 user，repo，clientID，clientSecret 字段以对应
   * 如何配置请访问 https://github.com/gitalk/gitalk/blob/master/readme-cn.md
   */
  gitalk: {
    distractionFreeMode: false
  },
  /**
   * 顶部状态栏的链接
   * 链接有两种属性，一种是url，一种是to
   * 前者对应直接刷新跳转链接，后者对应react-router的Link标签链接（不会触发页面刷新，不能指向其他域名）
   */
  navItem: [
    {
      name: 'HOME',
      url: '/#/',
      icon: 'doughnut-chart'
    },
    {
      name: 'ME!',
      url: '/#/about',
      icon: 'social-media',
    },
    {
      name: 'BLOG',
      url: 'https://www.cnblogs.com/dragonir/',
      icon: 'selection',
      target: '_blank'
    }
  ],
  /**
   * Github 用户配置项
   */
  linkSections: [{
    title: 'links',
    linkList: [{
      name: 'TRICELL.FUN',
      href: 'https://tricell.fun'
    }]
  }],
  /**
   * 右侧sections的空白处
   * 注意！此处是直接插入html字段，目的是为了支持更高的用户自定义度（例如使用a标签
   * 请勿插入危险的标签
   */
  blankSections: [''],
  footers: [],
  /**
   * 是否使用serviceWorker缓存文件
   * 如果你的文件将会经常变动，或者是在同一域名下有其它项目在运行，请填false
   */
  isUseServiceWorker: false,
  // 默认的展示格式
  // 为true，则默认是夜间模式
  isDarkMode: false,
  pageConfApi
}
export default config
