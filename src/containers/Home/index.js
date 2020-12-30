import './home.scss';
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HomePageGridList from '../../components/GridList/HomePageGridList';

class SectionOne extends React.Component {
  render() {
    return (
      <div className="section section_one">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div className="moon_container">
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
      </div>
    )
  }
}
class SectionThree extends React.Component {
  render () {
    return (
      <div className="section section_three">
        <h3 className="section_title section_three_title">CONTACT</h3>
        <button className="resume_btn">View My Resume!</button>
        <div className="counter_zone">
          <a href="https://info.flagcounter.com/Ym1k"><img src="https://s05.flagcounter.com/count2/Ym1k/bg_FFFFFF/txt_2D2D2D/border_FFFFFF/columns_4/maxflags_20/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0" /></a>
        </div>
      </div>
    )
  }
}

function Home(props) {
  const anchors = ["firstPage", "secondPage", "thirdPage"];
  return (
    <ReactFullpage
    navigation
    navigationTooltips={anchors}
    sectionsColor={['#FFFFFF', "#FFFFFF", "#FFFFFF"]}
    licenseKey = {"OPEN-SOURCE-GPLV3-LICENSE"}
    onLeave={(origin, destination, direction) => {}}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>
      );
    }}
  />
  );
}
export default Home;