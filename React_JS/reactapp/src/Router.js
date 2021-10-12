import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Players from './Components/Players';
import App from './App'
import Navigation from './Components/Navigation';

function Router() {
  return (
    <div>
      <Navigation />
      <Switch>
         <Route path="/" exact component={App} />
         <Route path="/about" exact component={About} />
         <Route path="/contact" exact component={Contact} />
         <Route path="/players" exact component={Players} />
         </Switch>
    </div>
    
  );
}

export default Router;
