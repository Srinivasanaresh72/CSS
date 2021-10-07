import React from 'react'

export default function AppHeader(props){

    return(
        <div>
            <h1> Welcome to React App </h1>
            <h4> UserName : {props.username} </h4>
            <h4> Location : {props.location} </h4>
        </div>
        
    )
}