import React from "react";
import Navbar from "../../components/nav/Navbar";
import { Navigate, useParams } from "react-router-dom";
import Challenges from "./Challenges";
const MonthlyChallenge = () => {

    const params = useParams();
    const challengeName = params?.challengeName;
    if (!challengeName) return (
        <Navigate to="/monthlychallenge/"/>
    ) 

    var selectedMonthlyChallenge;

    Promise.all(Challenges.map((challenge) => {
        if (challenge.name == challengeName){
            selectedMonthlyChallenge = challenge;
        }
    })) 
    return (
        <React.Fragment>
            <div className="App">
                <Navbar/>
                <div className="container">
                    {
                        selectedMonthlyChallenge && selectedMonthlyChallenge.name && selectedMonthlyChallenge.officialName ? (
                           <React.Fragment>
                                <h2 style={{fontSize: '1em'}}>You are viewing monthly challenge name {selectedMonthlyChallenge.officialName}</h2>
                                <p>{selectedMonthlyChallenge.content}</p>
                            </React.Fragment>
                        ) : (
                            <Navigate to="/monthlychallenge/"/>
                        )
                    }
                </div>
            </div>
        </React.Fragment>
    )
}


export default MonthlyChallenge;