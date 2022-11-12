import React from 'react';
import Navbar from '../../components/nav/Navbar';
import img from '../../trains.png';
import MonthlyChallengeListing from '../../components/MonthlyChallengeListing';
import Challenges from './Challenges';
const Monthly = () => {
    
    return (
        <div className="App">
            <Navbar/>
            <div className='containerImg'>
          <div className='imageText'>
          <h1 className='imageI'style={{color: "rgb(13 132 255 / 80%)", textDecorationColor: "rgb(102 206 255 / 30%)"}}>MONTHLY CHALLENGES</h1>

          </div>
          <img className='mainImage' src={img}/>
        </div>
        <div className="whatsnew container" style={{marginTop: '3vw'}}>
            <h2 style={{fontWeight: 200, fontSize: '0.5em'}} className="nomargin">Monthly Challenges</h2>
            <ul>
               {
                Challenges.map((challenge) => {
                    return <MonthlyChallengeListing name={challenge.name} officialName={challenge.officialName}/>
                })
               }
            </ul>
        </div>
        </div>

    )
}
export default Monthly