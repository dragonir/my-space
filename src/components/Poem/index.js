import React from 'react'
import './poem.styl'

function Poem () {
  return (
    <div className="poem">
      <p className="sentence">My name is Ozymandies, <span>king of kings</span></p>
      <p className="sentence">Look on my works, ye mighty, and despair</p>
      <p className="sentence">Nothing beside remains. Round the decay</p>
      <p className="sentence">Of that colossal wreck, boudless and bare</p>
      <p className="sentence"><span>The lone and level sands</span> stretch far away</p>
    </div>
  )
}

export default Poem;