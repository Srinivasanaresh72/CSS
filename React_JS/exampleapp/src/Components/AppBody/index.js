import React,{Component} from 'react'
import './index.css'

export default class AppBody extends Component{

    constructor(props){
        super(props);
        this.state = {

            'FirstName':'',
            'LastName':'',
            'result':''

        }
    }
    handleInputChange = (e) =>{

        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({

            [name]: value

        })
        console.log(this.state.FirstName);
        console.log(this.state.LastName);


    }

    onSubmit = (e) => {

        const result = parseInt(this.state.FirstName) + parseFloat(this.state.LastName);
        this.setState({

            result: result
        })

    }

    render(){

     
        return(

            <div className="AppBody">
                <input className="input" name = "FirstName" type="text" onChange={this.handleInputChange} value = {this.state.FirstName} placeholder = "enter First Name" /> <br />
                <input className="input" name = "LastName" type="text" onChange={this.handleInputChange} value = {this.state.LastName} placeholder = "enter Last Name" /> <br />
                <div className="submitContainer">
                     <button className="submit"onClick = {this.onSubmit}> Submit </button> <br /><br />
                </div>
                <div className="resultContainer">
                <h4 className="result1"> {this.state.FirstName} {this.state.LastName} </h4> <br /><br />
                <h4 className="result2"> {this.state.result} </h4>
                </div>
                
            </div>

        )
    }

}