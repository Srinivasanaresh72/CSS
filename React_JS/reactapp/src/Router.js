import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Photos from './Components/Photos';
import App from './App'

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/photos" exact component={Photos} />
    </Switch>
  );
}

export default Router;
