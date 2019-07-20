import React, { Component } from "react";
// import { connect} from "react-redux";
// import uuid from "uuid";

class Form extends Component {
    state ={
        smurf:""
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        // const {smurf} = this.state;
    }

    render(){
        const {smurf}= this.state;
        return(
            <form onSubmit={this.handleSubmit}>    
                <input
                    type="text"
                    placeholder="New Smurf"
                    name="smurf"
                    value={smurf}
                    onChange={this.handleChange}
                    required
                />
            <button type="submit">Add New Smurf</button>    
            </form>
        )
    }
}

export default Form;