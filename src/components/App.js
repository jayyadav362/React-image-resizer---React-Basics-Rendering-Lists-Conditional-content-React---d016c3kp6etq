import React,{useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [height , setHeight]=useState(320);
  const [width , setWidth]=useState(320);

  return (
    <div id="main">
        <input type="range" min="100" max="800" value={`${height}px`} id="height-slider" onChange={(e)=>setHeight(e.target.value)}></input>
        <div>{height}px</div>
        <input type="range" min="100" max="800" value={`${width}px`} id="width-slider" onChange={()=>setWidth(e.target.value)}></input>
        <div>{width}px</div>
        <img id='resizable-img' src='../src/image.jpeg' height={height} width={width} alt="resizable-img"/>
    </div>
  )
}


export default App;