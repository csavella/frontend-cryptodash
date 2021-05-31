import "./App.css";
import { useState,useMemo } from "react";
import Navbar from "../Navigation/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import BurgerMenu from "../Navigation/BurgerMenu";
import Search from "./Search";
import Exchanges from "./Exchanges";
import About from "./About";
import Resources from "./Resources";
import ScrollToTop from "../Navigation/ScrollToTop";
import { chartContext } from "../chartContext";
import Glossary from "../Glossary/Glossary";
import {pairContext} from "../CryptoPair/pairContext";
import Contact from "./Contact";

function App() {
  const [value,setValue] = useState(null);
  const chartValue = useMemo(() => ({value,setValue}),[value, setValue])
  const[pair,setPair] = useState(null);
  const pairTableValue = useMemo(() => ({pair,setPair}),[pair,setPair]);
  const [favoriteCoins, setFavoriteCoins] = useState([]);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <BurgerMenu />
        <Switch>
          <Route exact path="/">
            <pairContext.Provider value={pairTableValue}>
              <chartContext.Provider value={chartValue}>
                <Home
                  favoriteCoins={favoriteCoins}
                  setFavoriteCoins={setFavoriteCoins}
                />
              </chartContext.Provider>
            </pairContext.Provider>
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
