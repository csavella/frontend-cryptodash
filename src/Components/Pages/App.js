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
import { chartContext } from "../chartContext";
import {useState,useMemo} from "react";

function App() {
  const [value,setValue] = useState(null);
  const chartValue = useMemo(() => ({value,setValue}),[value, setValue])
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <BurgerMenu />
        <Switch>
          <chartContext.Provider value={chartValue}>
          <Route exact path="/">
            <Home />
          </Route>
          </chartContext.Provider>
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
      </Router>
      <div className="content"></div>
      <ScrollToTop />
    </div>
  );
}

export default App;
