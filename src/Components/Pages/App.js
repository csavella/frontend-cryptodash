import "./App.css";
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
import {pairContext} from "../CryptoPair/pairContext";
import React, {useState,useMemo} from "react";

function App() {
  const[pair,setPair] = useState(null);
  const pairTableValue = useMemo(() => ({pair,setPair}),[pair,setPair]);
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <BurgerMenu />
        <Switch>
          <pairContext.Provider value={pairTableValue}>
          <Route exact path="/">
            <Home />
          </Route>
          </pairContext.Provider>
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
        </Switch>
      </Router>
      <div className="content"></div>
      <ScrollToTop />
    </div>
  );
}

export default App;
