import React from 'react';
import Navbar from '../components/nav/Navbar';
import img from "../trains.png";
const Home = () => {
    return (
        <div className="App">
            <Navbar/>
            <div className='containerImg'>
          <div className='imageText'>
          <h1 className='imageI'style={{color: "rgb(13 132 255 / 80%)", textDecorationColor: "rgb(102 206 255 / 30%)"}}>STEAM</h1>
          <h1 className='imageI'style={{fontSize: "3.5vw", color: "rgb(255 255 255 / 79%);", textDecoration: "none"}}>The future of tomorrow's innovators</h1>

          </div>
          <img className='mainImage' src={img}/>
        </div>
        <div className="whatsnew container" style={{marginTop: '3vw'}}>
            <h2 style={{fontWeight: 200, fontSize: '1em'}}>Whats New This Month</h2>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&mode=AGENDA&src=Y180MTI4NjBhNjg4NDE3ODI1NTc5MDM5ZTA0MWM4OWU3N2FhOGRlMjhmYTU1NDdmM2U3MmQ2YzQ3YjA4MGUwNjM1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23C0CA33" className = "iframe" width="100%" height="500vw" frameborder="0" scrolling="no"/>
        </div>
        </div>
    )
}

export default Home;