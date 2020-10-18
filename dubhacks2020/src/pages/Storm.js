import React from 'react';
import Problems from "../components/Problems"
import { ProblemCard, ProblemDisplayCard } from "../components/problemCards"

function Storm() {
    return (
        <div>
            <Problems />
            <ProblemCard />
            <ProblemDisplayCard />
        </div>
        
    )
}

export default Storm;