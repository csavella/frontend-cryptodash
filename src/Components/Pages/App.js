import './App.css';
import Navbar from '../Navigation/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import BurgerMenu from '../Navigation/BurgerMenu';
import Search from './Search';
import Exchanges from './Exchanges';
import About from './About';
import Resources from './Resources';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Navbar />
      <BurgerMenu />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/exchanges"> 
            <Exchanges />
          </Route>
          <Route path="/about"> 
            <About />
          </Route>
          <Route path="/resources"> 
            <Resources />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
