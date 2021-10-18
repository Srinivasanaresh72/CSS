import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
export default function PlayerContainer(props){


    return(
        <div className="playerContainer">
            <h1> Player Details </h1>
            <h5> <Link to="/players"> Back </Link> </h5>
            <h4> {props.match.params.name}</h4>
            <img  src={require('../../assets/images/'+props.match.params.image).default}/>
        </div>

        

    )


}