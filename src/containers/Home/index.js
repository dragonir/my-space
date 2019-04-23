import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Button } from '@material-ui/core';

function Home(props) {
  return (
    <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <h1>SECTION 1</h1>
            <Button variant="contained" onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</Button>
          </div>
          <div className="section">
            <h1>SECTION 2</h1>
          </div>
          <div className="section">
            <h1>SECTION 3</h1>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}

export default Home;