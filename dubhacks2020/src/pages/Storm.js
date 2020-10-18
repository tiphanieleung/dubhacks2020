import React from 'react';
import Problems from "../Components/Problems"
import { ProblemCard, ProblemDisplayCard } from "../Components/problemCards"

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