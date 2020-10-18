import React, { Component } from 'react';
import "../style.css";
import { ProblemCard } from "../Components/problemCards"
import problem from "../images/problems-mainPage.svg"

class Problems extends Component {
    render() {
        return (
            <div className="ProblemContainer">
            <div className="stormSection">
                <div className="sectionTitle">
                <img src={problem} alt="login" />
                    <h2 className="stormDescription"> List out some problems that you've got floating in that beatiful mind of yours! It can be anything! </h2>
               </div>
                <ProblemCard />
            </div>
            </div>
        )
    }
}

export default Problems;