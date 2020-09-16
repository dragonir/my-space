import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
// import MediaCard from '../../components/MediaCard';
// import homeImg from '../../assets/images/components/home.png';
import HomePageGridList from '../../components/GridList/HomePageGridList';
import HomepageThreeList from '../../components/HomepageCompoments/HomepageThreeList';
import LearnMore from '../../components/HomepageCompoments/LearnMore';
// import moon from '../../assets/images/components/home/the_moon.png';
import './home.scss';

class SectionOne extends React.Component {
  render() {
    return (
      <div className="section section_one">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div className="moon_container">
          {/* <img className="moon" src={moon} alt="moon" /> */}
          {/* <h3 className="section_title">TRICELL FUN</h3> */}
          <div className="intro">
            <p className="text">WE ONLY LIVE ONCE.</p>
            <p className="enter_zone">
              <a className="enter_btn" href="#post">ENTER
              <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
} 
class SectionTwo extends React.Component {
  render() {
    return (
      <div className="section section_two">
        <h3 className="section_title section_two_title">PREVIOUS WORK</h3>
        <HomePageGridList />
        {/* <LearnMore route="#work" /> */}
      </div>
    )
  }
}
class SectionThree extends React.Component {
  render () {
    const posts = [
      {
        id: 0,
        title: 'util.js',
        descript: 'Util.js 是对常用函数的封装，方便在实际项目中使用，主要内容包含：数组类、浏览器类、日期类、函数类、数学类、媒体类、节点类、对象类、字符串类、类型检测类、正则表达式类等内容。',
        icon: 'icon1',
        link: '#article/29'
      },
      {
        id: 1,
        title: 'css3动画控制的暂停与运行',
        descript: '面对浏览器日益蓬勃的发展，web端技术也越来越多的被使用在移动开发中，为了提高用户体验， 作为前端工程师的我们要设计各式各样的交互效果',
        icon: 'icon2',
        link: '#article/27'
      },
      {
        id: 2,
        title: 'EventUtil.js',
        descript: '跨浏览器事件处理程序封装',
        icon: 'icon3',
        link: '#article/28'
      },
      {
        id: 3,
        title: '函数防抖和节流',
        descript: '函数防抖与节流是很相似的概念，但它们的应用场景不太一样。',
        icon: 'icon2',
        link: '#article/21'
      },
      {
        id: 4,
        title: '使用watermark.js实现照片动态添加模板和二维码',
        descript: '最近开发了一个动态给上传图片添加模板边框和动态添加二维码的VUE项目，其中添加模板和二维码功能通过watermark.js实现',
        icon: 'icon2',
        link: '#article/34'
      },
      {
        id: 5,
        title: 'HTML兼容IE浏览器写法',
        descript: '考虑到国内浏览器还是ie6比较多，所以把顺序排列了下，然后只针对非ie6,7,8进行判断',
        icon: 'icon2',
        link: '#article/12'
      },
      {
        id: 6,
        title: 'IE 兼容透明度',
        descript: '低版本IE下不支持rgba()的表示方法，怎么办？',
        icon: 'icon2',
        link: '#article/12'
      },
      {
        id: 7,
        title: 'a标签属性 noopener noreferrer',
        descript: '当你浏览一个页面点击一个a标签连接,跳转到另一个页面时，在新打开的页面（baidu）中可以通过 window.opener获取到源页面的部分控制权',
        icon: 'icon2',
        link: '#article/10'
      },
      {
        id: 8,
        title: 'git 常用指令',
        descript: 'git branch 查看本地所有分支, git status 查看当前状态 ',
        icon: 'icon2',
        link: '#article/10'
      },
    ]
    return (
      <div className="section section_three">
        <h3 className="section_title section_three_title">PRACTICE NOTES</h3>
        <HomepageThreeList posts={posts} />
        <LearnMore route="#post" />
      </div>
    )
  }
}
class SectionFour extends React.Component {
  render () {
    return (
      <div className="section section_four">
        <h3 className="section_title section_four_title">CONTACT</h3>
        <button className="resume_btn">CHECK MY RESUME!</button>
        <div class="counter_zone">
          <a href="https://info.flagcounter.com/Ym1k"><img src="https://s05.flagcounter.com/count2/Ym1k/bg_FFFFFF/txt_2D2D2D/border_FFFFFF/columns_4/maxflags_20/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0" /></a>
        </div>
      </div>
    )
  }
}

function Home(props) {
  const anchors = ["firstPage", "secondPage", "thirdPage", 'fourthPage'];
  return (
    <ReactFullpage
    navigation
    navigationTooltips={anchors}
    sectionsColor={['#FFFFFF', "#FFFFFF", "#FFFFFF", "#FFFFFF"]}
    licenseKey = {"OPEN-SOURCE-GPLV3-LICENSE"}
    onLeave={(origin, destination, direction) => {
      // console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      // console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
      return (
        <div>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </div>
      );
    }}
  />
  );
}
export default Home;