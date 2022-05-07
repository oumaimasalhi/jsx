import React from 'react'
import './style.css';
import myWonderfulImage from "./imageInPublic.jpg"
import Image from "./photos.jpg"

function App() {
  return (
    <div className="App">     
<div style={{border:'solid 1px black' , maxWidth:'100vw'}}>

<h1 className="title red">Oumaima</h1>

<br />

<img src={myWonderfulImage} className='Image' alt ='myImage'/>

<br />

<img src={Image} className='Photo' alt = 'myPhoto' />

</div>

<video className="video" width ="320"  height ="240"  controls >

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
