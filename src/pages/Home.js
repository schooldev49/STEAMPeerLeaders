import React from 'react';
import Navbar from '../components/nav/Navbar';
import img from "../trains.png";
const Home = () => {
    return (
        <div className="App">
            <Navbar/>
            <div className='containerImg'>
          <div className='imageText'>
          <h1 className='imageI'style={{color: "rgb(148 155 239 / 80%)", textDecorationColor: "rgb(146 133 249 / 30%)"}}>STEAM</h1>
          <h1 className='imageI'style={{fontSize: "3.5vw", color: "rgb(255 255 255 / 79%);", textDecoration: "none"}}>The future of tomorrow's innovators</h1>

          </div>
          <img className='mainImage' src={img}/>
        </div>
        </div>
    )
}

export default Home;