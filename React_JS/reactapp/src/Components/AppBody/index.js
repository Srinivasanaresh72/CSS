import React, {Component } from 'react'

export default class AppBody extends Component{

    constructor(props){

        super(props);
        this.state = {

            'firstname' : '',
            'lastname' : ''

        }
    }

    handleInputChange = (e) =>{

        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({

            [name] : value
        })
        console.log(this.state.firstname);
        console.log(this.state.lastname);
    }

    render(){
        return(
            
            <div>
                <input type="text" name = "firstname" onChange = {this.handleInputChange} value = {this.state.firstname} placeholder = "Enter First Name" /> <br />
                <input type="text" name = "lastname" onChange = {this.handleInputChange} value = {this.statelastname} placeholder = "Enter Last Name" /> <br />
                <button> Submit </button>
            </div>
        )
    }
}