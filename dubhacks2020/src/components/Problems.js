import React, { Component } from 'react';
import "../style.css";
import { ProblemCard } from "../Components/problemCards"

class Problems extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#F9F9F9"}}>
            <div className="stormSection">
                <div className="sectionTitle">
                    <h1 className="stormTitle">Problems</h1>
                    <h2 className="stormDescription"> List out some problems that you've got floating in that beatiful mind of yours! It can be anything! </h2>
               </div>
                <ProblemCard />
            </div>
            </div>
        )
    }
}

export default Problems;