import React from "react";

var buttonStyle = {
    margin: '10px 10px 10px 0'
};

function clickMe() {
    alert("You clicked me");
}

function Buttons(){
    return (
        <div> HI</div>
        // <div>
        //     <button onClick = {clickMe}>
        //         Button
        //     </button>
        // </div>
    );
}

export default Buttons;