import React, {Component } from 'react'
import './index.css'

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
            
            <div cclassName="AppBody">
                <input className="input" type="text" name = "firstname" onChange = {this.handleInputChange} value = {this.state.firstname} placeholder = "Enter First Name" /> <br />
                <input type="text" className="input" name = "lastname" onChange = {this.handleInputChange} value = {this.state.lastname} placeholder = "Enter Last Name" /> <br />
                <div className="SubmitContainer">
                     <button className="submit" onClick = {this.onSubmit} > Submit </button> <br/><br />
                </div>
                <div className="ResultContainer">
                     <h4 className="result1"> {this.state.firstname} {this.state.lastname} </h4> <br /><br />
                     <h4 className="result2"> {this.state.result} </h4>
                </div>
                
                
            </div>
        )
    }
}