import React from 'react'
import './index.css'
export default function AppHeader(props){

    return(
        <div className="AppHeader">

             <h1 className="Header"> Welcome to React App </h1>
             <h3> Username : {props.username} </h3>
             <h3> Location : {props.location} </h3>

        </div>
        
    )
}