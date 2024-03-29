import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Poem from '../../components/Poem/index';
import Kas from '../../components/3D/kas';
import { Link } from '@material-ui/core';
import './home.styl';

class SectionOne extends React.Component {
  render() {
    return (
      <div className="section section_one">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <i className="banner">
          <i className="cycle"></i>
        </i>
      </div>
    )
  }
}
class SectionTwo extends React.Component {
  render() {
    return (
      <div className="section section_two">
        <Poem />
      </div>
    )
  }
}
class SectionThree extends React.Component {
  render () {
    return (
      <div className="section section_three">
        <Link className="resume_btn" href="#about">View My Resume!</Link>
        <p className="copyright">Powered by <a href="https://github.com/dragonir">WANGBIN &copy; 2022</a></p>
        <div className="counter_zone">
          <a href="https://info.flagcounter.com/Ym1k"><img src="https://s05.flagcounter.com/count2/Ym1k/bg_FFFFFF/txt_000000/border_FFFFFF/columns_4/maxflags_16/viewers_3/labels_1/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0" /></a>
        </div>
      </div>
    )
  }
}
class Section3D extends React.Component {
  render() {
    return (
      <div className="section section_modal">
        <Kas />
      </div>
    )
  }
}

function Home(props) {
  const anchors = ["", "", "", ""];
  return (
    <ReactFullpage
    navigation
    navigationTooltips={anchors}
    licenseKey = {"OPEN-SOURCE-GPLV3-LICENSE"}
    onLeave={(origin, destination, direction) => {}}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <Section3D />
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