import React from "react";
// import {connect} from "react-redux";

function SmurfList (props) {
    return(
        <div>
            <ul>
                {props.smurfs.map(item=>{
                    return (
                        <li key={item.id}>{item.smurf}</li>                        
                    )
                })}
            </ul>
        </div>
    )
}

export default SmurfList;