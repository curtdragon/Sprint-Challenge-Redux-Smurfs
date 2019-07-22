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
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        addingSmurf: state.addingSmurf,
        updatingSmurf: state.updatingSmurf,
        deletingSmurf: state.deletingSmurf,
        error: state.error, 
    }
}

export default connect(mapStateToProps)(SmurfList);
// export default SmurfList;