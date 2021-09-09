import React from 'react';
// import "./DisplayName.css";

const DisplayName=(props) => {
    return (   
        <React.Fragment>
            
            <h2>Exercise 1</h2>
            <hr/>
            <h1>{props.fName} {props.lName}</h1>
        </React.Fragment>          
    );
}
 
export default DisplayName;