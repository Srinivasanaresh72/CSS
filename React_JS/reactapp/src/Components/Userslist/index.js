import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './index.css'
export default class Userslist extends Component{

    state = {

        users: []
    }

    componentDidMount(){

        axios.get('http://localhost:3004/users')
        .then(res => {

            console.log(res.data);
            this.setState({

                users: res.data

            })
            console.log(this.state.users);
        })


    }

    deleteUser = (e) =>{

        e.preventDefault();
        const id=e.target.id;
        axios.delete('http://localhost:3004/users/'+id)
        .then(res => {

            console.log(res.data);
            setTimeout(()=>{

                window.location.replace('/')

            },500)
            
        })
    }

    render(){

        return(

            <div className="userslist">

            <h1> List of Users </h1>
            {this.state.users.map((user) => (

                <div className="item">
                    <li id={user.id}> {user.name} </li>
                    <Link className="link" to={'/edituser/'+user.id+'/'+user.name}> Edit </Link>
                    <button id={user.id} onClick={this.deleteUser}> Delete </button>
                </div>
                
                ))}
            </div>
        )
    }


}