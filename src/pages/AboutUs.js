import React from 'react';
import Navbar from '../components/nav/Navbar';
import ABUserLayout from '../components/ABUserLayout';
import img from "../trains.png";
const ABUserLayoutTable = [
    {
        name: "Aaron Yu",
        email: "mailto:27yua@millburn.org"
    },
    {
        name: "Vihan Aggarwal",
        email: "mailto:27aggarwalv@millburn.org"
    },
    {
        name: "Aditi Banerjee",
        email: "mailto:27banerjeea@millburn.org"
    },
    {
        name: "Marcello Carlucci",
        email: "mailto:27carluccim@millburn.org"
    }

]
const AboutUs = () => {
    return (
        <div className="App">
            <Navbar/>
            <div className='containerImg'>
          <div className='imageText'>
          <h1 className='imageI'style={{color: "rgb(13 132 255 / 80%)", textDecorationColor: "rgb(102 206 255 / 30%)"}}>ABOUT US</h1>

          </div>
          <img className='mainImage' src={img}/>
        </div>

        <div style={{display: 'flex', flexFlow: 'row', marginTop: '3vw'}}>
            <div style={{float: 'left', width: '50vw'}}>
                <div className='container' style={{height: '40.21vw'}}>
                    <ul className="containerUl">
                        <li>STEAM!</li>
                        <li>Science 🔬</li>
                        <li>Technology 💻</li>
                        <li>Engineering 🔨</li>
                        <li>Art 🎨</li>
                        <li>Math ➕</li>
                    </ul>
                </div>
            </div>
            <div style={{float: 'right', width: '75vw', marginBottom: '3vw'}}>
                 <div className='container' style={{height: '40.21vw'}}>
                    <h2 style={{fontWeight: 200, fontSize: '1em'}}>We are the Steam Peer Leaders!</h2>
                    <p style={{fontWeight: 100, fontSize: '0.7em'}}>
                    We strive to add innovative and fun activities for MMS students to take part in.  This helps to get the community involved in educational and team-building exercises.
                    </p>
                </div>
            </div>
           
        </div>
        <div className="container">
                <h2 style={{fontWeight: 200, fontSize: '1em'}}>
                    Our Members:
                </h2>
                <ul className="containerUl">
                   
                    {
                        ABUserLayoutTable.map((person) => {
                            return <ABUserLayout email={person.email}>{person.name}</ABUserLayout>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default AboutUs;