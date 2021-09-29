import React, {Component } from 'react'

export default class AppBody extends Component{

    constructor(props){

        super(props);
        this.state = {

            'firstname' : 'Lanka',
            'lastname' : 'Naresh'

        }
    }

    render(){
        return(
            <p> My Name is {this.state.firstname} {this.state.lastname} </p>
        )
    }
}