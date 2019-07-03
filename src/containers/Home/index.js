import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
// import MediaCard from '../../components/MediaCard';
// import homeImg from '../../assets/images/components/home.png';
import HomePageGridList from '../../components/GridList/HomePageGridList';
import HomepageThreeList from '../../components/HomepageCompoments/HomepageThreeList';
import LearnMore from '../../components/HomepageCompoments/LearnMore';
import moon from '../../assets/images/components/home/moon.png';
import Countdown from '../../components/Countdown/index';
import NameCard from '../../components/NameCard/index.js';
import './home.scss';

class SectionOne extends React.Component {
  render() {
    return (
      <div className="section section_one">
        {/* <MediaCard 
          image={homeImg} 
          title={"Once upon a time ..."}
          maxWidth="35em"
          height="38em"
          info={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
          learnMore={"#about"}
        /> */}
        <div className="moon_container">
          <img className="moon" src={moon} alt="moon" />
          <h3 className="section_title">TRICELL.<br/>FUN</h3>
          <div className="intro">
            <p className="text">The HTML5 test score is an indication of how well your browser supports the HTML5 standard and related specifications. Find out which parts of HTML5 are supported by your browser today and compare the results with other browsers.</p>
            <p className="enter_zone">
              <a className="enter_btn" href="#blog">ENTER
              <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
              </a>
            </p>
            <Countdown />
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
    return (
      <div className="section section_three">
        <h3 className="section_title section_three_title">PRACTICE NOTES</h3>
        <HomepageThreeList />
        <LearnMore route="#blog" />
      </div>
    )
  }
}
class SectionFour extends React.Component {
  render () {
    return (
      <div className="section section_four">
        <h3 className="section_title section_four_title">CONTACT</h3>
        <NameCard />
        <button className="resume_btn">CHECK MY RESUME!</button>
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
    sectionsColor={["#1B2021", "#FFFFFF", "#FFFFFF", "#FFFFFF"]}
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