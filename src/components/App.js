
import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [maxsum,semaxsum] = useState(50);
  const [range,setrange] = useState(0);
  const [rangeB,setrangeB] = useState(50);
  function handleonChange(event){
    setrange(parseInt(event.target.value));
  }
  function handleonChangeB(event){
    setrangeB(parseInt(event.target.value));

  }
  
  
  
  return(
    <div>
      <div id="max-sum-holder">
        <input type="number" 
        value={maxsum}
        onChange={(e)=>semaxsum(parseInt(e.target.value))} />
      </div>
      <div id="range-a-holder">
        <input type="range" 
        value={range} 
        min={0} max={maxsum}
        onChange={handleonChange} />
        <div id="range-a-value">{range}</div>
      </div>
      <div id="range-b-holder">
        <input type="range" value={rangeB} min={0} max={maxsum}
        onChange={handleonChangeB}/>
        <div id="range-b-value">{rangeB}</div>
      </div>
      <div id="sum">{range + rangeB}</div>
    </div>
  )
}


export default App;
