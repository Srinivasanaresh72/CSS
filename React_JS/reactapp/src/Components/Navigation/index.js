import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
export default class Navigation extends Component{

    render(){

        return(
            <div>  
                <h1> Welcome to Cricket Sports Club </h1>          
                <ul>
                    <li> <Link className="link" to='/' > Home </Link> </li>
                    <li> <Link className="link" to='/about'> About </Link> </li>
                    <li> <Link className="link" to='contact'> Contact </Link> </li>
                    <li> <Link className="link" to='players'> Players </Link> </li>
                </ul>    
            </div>




        )
    }
}