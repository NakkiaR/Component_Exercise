import React from 'react';

const NameList = (props) => {
    return (
        <React.Fragment>
            <h2>Exercise 2</h2>
            <hr/>
            <ul>
                {props.nameListExercise.map((nameList) => {
                    return <li>{nameList}</li>
                })}
            </ul>    
        </React.Fragment>          
      );
}
 
export default NameList;

 
