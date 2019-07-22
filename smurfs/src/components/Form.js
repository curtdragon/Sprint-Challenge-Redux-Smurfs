import React, { Component } from "react";
import { connect} from "react-redux";
import uuid from "uuid";
import {addSmurf} from "../actions/index"

class Form extends Component {
    state ={
        smurf:""
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        const { name, age, height } = this.state;

        const newSmurf ={
            name,
            age,
            height,
            id: uuid.v4(),
        }
        this.props.addSmurf(newSmurf)
        console.log("New smurf", newSmurf);
        this.setState({name:"", age:"", height:""});
    }

    render() {
        const {name, age, height}= this.state;
        return(
            <form onSubmit={this.handleSubmit}>    
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Age"
                    name="age"
                    value={age}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Height"
                    name="height"
                    value={height}
                    onChange={this.handleChange}
                    required
                />
            <button type="submit">Add New Smurf</button>    
            </form>
        )
    }
}

const mapDispatchToProps={
    addSmurf
}

export default connect(null, mapDispatchToProps)(Form);