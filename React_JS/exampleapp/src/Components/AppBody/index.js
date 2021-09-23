import React,{Component} from 'react'

export default class AppBody extends Component{

    constructor(props){
        super(props);
        this.state = {

            'FirstName':'Lanka',
            'LastName':'Naresh'

        }
    }

    render(){

     
        return(

            <p> My Name is {this.state.FirstName} {this.state.LastName} </p>

        )
    }

}