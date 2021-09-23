import React,{Component} from 'react'

export default class AppBody extends Component{

    constructor(props){
        super(props);
        this.state = {

            'FirstName':'',
            'LastName':''

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

    render(){

     
        return(

            <div>
                <input name = "FirstName" type="text" onChange={this.handleInputChange} value = {this.state.FirstName} placeholder = "enter FirstName" /> <br />
                <input name = "LastName" type="text" onChange={this.handleInputChange} value = {this.state.LastName} placeholder = "enter LastName" /> <br />
                <button> Submit </button>
            </div>

        )
    }

}