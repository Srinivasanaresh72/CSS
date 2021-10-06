import React, {Component } from 'react'

export default class AppBody extends Component{

    constructor(props){

        super(props);
        this.state = {

            'firstname' : '',
            'lastname' : '',
            'result' : ''

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

    onSubmit = (e) => {

        const result = parseInt(this.state.firstname) + parseInt(this.state.lastname);
        this.setState({

            result: result
        })
    }

    render(){
        return(
            
            <div>
                <input type="text" name = "firstname" onChange = {this.handleInputChange} value = {this.state.firstname} placeholder = "Enter First Name" /> <br />
                <input type="text" name = "lastname" onChange = {this.handleInputChange} value = {this.state.lastname} placeholder = "Enter Last Name" /> <br />
                <button onClick = {this.onSubmit} > Submit </button> <br/><br />
                <h4> {this.state.firstname} {this.state.lastname} </h4> <br /><br />
                <h4> {this.state.result} </h4>
            </div>
        )
    }
}