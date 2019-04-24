import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Button } from '@material-ui/core';
import './home.scss';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  /**
   * require('fullpage.js/vendors/scrolloverflow'); // Optional. When using scrollOverflow:true
   */
};

const originalColors = ['#282C34', '#FF5F45', '#0798EC'];


// class Home extends React.Component {
//   state = {
//     sectionColor: [...originalColors],
//     fullpages: [
//       {
//         text: 'section 1',
//       },
//       {
//         text: 'section 2',
//       },
//       {
//         text: 'section 3',
//       }
//     ]
//   };

//   onLeave(origin, destination, direction) {
//     console.log('onLeave', { origin, destination, direction });
//     // arguments are mapped in order of fullpage.js callback arguments do something
//     // with the event
//   }

//   handleChangeColors() {
//     const newColors =
//       this.state.sectionsColor[0] === 'yellow'
//         ? [...originalColors]
//         : ['yellow', 'blue', 'white'];
//     this.setState({
//       sectionsColor: newColors,
//     });
//   }

//   handleAddSection() {
//     this.setState(state => {
//       const { fullpages } = state;
//       const { length } = fullpages;
//       fullpages.push({
//         text: `section ${length + 1}`,
//         id: Math.random(),
//       });

//       return {
//         fullpages: [...fullpages],
//       };
//     });
//   }

//   handleRemoveSection() {
//     this.setState(state => {
//       const { fullpages } = state;
//       const newPages = [...fullpages];
//       newPages.pop();

//       return { fullpages: newPages };
//     });
//   }

//   render() {
//     const { fullpages } = this.state;
    
//     if(!fullpages.length) {
//       return null;
//     }

//     const Menu = () => (
//       <div
//         className="menu"
//         style={{
//           position: 'fixed',
//           top: 0,
//           zIndex: 100,
//         }}
//       >
//         <ul>
//           <li>
//             <button onClick={() => this.handleAddSection()}>+ Section</button>
//             <button onClick={() => this.handleRemoveSection()}>
//               - Section
//             </button>
//             <button onClick={() => this.handleChangeColors()}>
//               Change colors
//             </button>
//           </li>
//         </ul>
//       </div>
//     );

//     return (
//       <div className="App">
//         <Menu />
//         {/* <ReactFullpage
//           debug
//           navigation
//           anchors={['firstPage', 'secondPage', 'thirdPage']}
//           sectionSelector={SECTION_SEL}
//           onLeave={this.onLeave.bind(this)}
//           sectionsColor={this.state.sectionsColor}
//           pluginWrapper={pluginWrapper}
//           render={comp => (
//             <ReactFullpage.Wrapper>
//               {fullpages.map(({ text }) => (
//                 <div key={text} className={SEL}>
//                   <h1>{text}</h1>
//                 </div>
//               ))}
//             </ReactFullpage.Wrapper>
//           )}
//         /> */}
//       </div>
//     );
//   }
// }
class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const anchors = ["firstPage", "secondPage", "thirdPage"];

function Home(props) {

  return (
    <ReactFullpage
    // anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <MySection content={"Slide down!"} />
          <MySection content={"Keep going!"} />
          <MySection content={"Slide up!"} />
        </div>
      );
    }}
  />
  );
}

export default Home;