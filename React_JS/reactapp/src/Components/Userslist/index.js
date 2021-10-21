import React,{Component} from 'react'
import axios from 'axios'
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

    render(){

        return(

            <div>

            <h1> List of Users </h1>
            {this.state.users.map((user) => (

                <li id={user.id}> {user.name} </li>
                
                ))}
            </div>
        )
    }


}