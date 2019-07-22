import React from "react";
import {connect} from "react-redux";

function SmurfList (props) {
    return(
        <div>
            <div>
                {props.smurfs.map(item=>{
                    return (
                        <p key={item.id}>Name: {item.name} Age: {item.age} Height: {item.height}</p>                        
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, null)(SmurfList);
// export default SmurfList;