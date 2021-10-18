import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Players from './Components/Players';
import App from './App'
import Navigation from './Components/Navigation';
import PlayerContainer from './Containers/PlayerContainer';

class Router extends Component{

  state = {

    Players:[
      {
        'id':1,
        'name':'MS_Dhoni',
        'image':'MS_Dhoni.jpg'
      },

      {
        'id':2,
        'name':'Virat_Kohli',
        'image':'Virat_Kohli.jpg'
      },

      {
        'id':3,
        'name':'Rohit_Sharma',
        'image':'Rohit_Sharma.jpg'
      },

      {
        'id':4,
        'name':'Bumrah',
        'image':'Bumrah.jpg'
      },

      {
        'id':5,
        'name':'KL_Rahul',
        'image':'KL_Rahul.jpg'
      }
    ]
  }
  render(){
    return (
      <div>
        <Navigation />
        <Switch>
           <Route exact path="/" component={App} />
           <Route exact path="/about" component={About} />
           <Route exact path="/contact"  component={Contact} />
           <Route exact path="/players" render={(props) => <Players {...props} players={this.state.Players} />} />
           <Route exact path = "/players/:id/:name/:image" render={PlayerContainer} />
           </Switch>
      </div>
      
    );
  }
  
}

export default Router;
