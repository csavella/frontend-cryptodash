// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import BurgerMenu from './BurgerMenu';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <BurgerMenu />
      {/* <header className="App-header">
      </header> */}
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pageone">
            <PageOne />
          </Route>
          <Route path="/pagetwo"> 
            <PageTwo />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
