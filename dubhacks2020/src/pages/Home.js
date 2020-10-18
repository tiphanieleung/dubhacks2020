import React from 'react';
import Buttons from './Buttons';
import '../style.css';
import flow from '../images/flow-main.svg';
import flowD from '../images/flow-mainBot.svg';
import sdown from '../images/scroll-downBoi.svg';
import Fade from 'react-reveal/Fade';


function Home() {
    return (
        <div style={{justifyContent: 'center', display: "flex", flexDirection: 'column'}} className="banner-text">
            <Fade bottom>
                <img src={flow} alt='Flow'/>
                <img style={{paddingTop: 70}}src={flowD} alt='FlowD'/>
            </Fade>
            
            <img style={{justifyContent: 'center', paddingTop}} src={sdown} alt='Sdown'/>
            <h1 style={{padding: 500}}>
                henlo
            </h1>
        </div>
    )
}

export default Home;
