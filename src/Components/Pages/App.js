import "./App.css";
import { useState } from "react";
import Navbar from "../Navigation/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import BurgerMenu from "../Navigation/BurgerMenu";
import Search from "./Search";
import Exchanges from "./Exchanges";
import About from "./About";
import Resources from "./Resources";
import ScrollToTop from "../Navigation/ScrollToTop";
import Glossary from "../Glossary/Glossary";
import Contact from "./Contact";

function App() {
  const [favoriteCoins, setFavoriteCoins] = useState([]);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <BurgerMenu />
        <Switch>
          <Route exact path="/">
            <Home
              favoriteCoins={favoriteCoins}
              setFavoriteCoins={setFavoriteCoins}
            />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/exchanges">
            <Exchanges />
          </Route>
          <Route path="/glossary">
            <Glossary />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <ScrollToTop />
    </div>
  );
}

export default App;
