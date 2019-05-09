import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './home.scss';
import MediaCard from '../../components/MediaCard';
import mediaCardImg from '../../assets/images/components/800.gif'
class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3 className="section_title">{this.props.content}</h3>
      </div>
    );
  }
}
class SectionOne extends React.Component {
  render() {
    return (
      <div className="section section_one">
        <h3 className="section_title">Lizards are a widespread group</h3>
        <MediaCard 
          image={mediaCardImg} 
          title={"My Space"}
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
        <h3 className="section_title">MY WORK</h3>
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
    sectionsColor={["#FFFC00", "#ff5f45", "#0798ec", "#03c03c"]}
    onLeave={(origin, destination, direction) => {
      // console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      // console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
      return (
        <div>
          <SectionOne />
          <SectionTwo />
          {/* <MySection content={"Slide down!"} /> */}
          <MySection content={"Keep going!"} />
          <MySection content={"Slide up!"} />
        </div>
      );
    }}
  />
  );
}
export default Home;