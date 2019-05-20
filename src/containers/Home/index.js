import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './home.scss';
import MediaCard from '../../components/MediaCard';
import homeImg from '../../assets/images/components/home.png';
import HomePageGridList from '../../components/GridList/HomePageGridList';
import HomepageThreeList from '../../components/HomepageCompoments/HomepageThreeList';
import LearnMore from '../../components/HomepageCompoments/LearnMore';

class SectionOne extends React.Component {
  render() {
    return (
      <div className="section section_one">
        <h3 className="section_title">EVERY MAN IS HIS OWN WORST ENEMY.</h3>
        <MediaCard 
          image={homeImg} 
          title={"Once upon a time ..."}
          maxWidth="35em"
          height="38em"
          info={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
          learnMore={"#about"}
        />
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
        <LearnMore route="#work" />
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
        <h3 className="section_title section_four_title">ACKNOWLEDGE</h3>
        <LearnMore route="#about" />
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
    sectionsColor={["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]}
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