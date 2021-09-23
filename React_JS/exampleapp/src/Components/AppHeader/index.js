import React from 'react'

export default function AppHeader(props){

    return(
        <div>

             <h1> Welcome to React App </h1>
             <h3> Username : {props.username} </h3>
             <h3> Location : {props.location} </h3>

        </div>
        
    )
}