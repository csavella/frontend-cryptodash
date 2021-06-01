import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import "./SearchBar.css";
import CoinInfo from "../CoinPages/CoinInfo";
import { Link, Route, Switch } from "react-router-dom";

const SearchBar = (props) => {
  /* display may not be necessary, just hides suggestions when no input field*/
  const [display, setDisplay] = useState(true);
  /* list of suggestions displayed */
  const [suggestions, setSuggestions] = useState([]);

  const inputOnChange = (event) => {
    event.preventDefault();
    /* if no input, then hide suggestions */
    if (event.target.value.length === 0) {
      setDisplay(false);
    } else {
      setDisplay(true);
      setSuggestions(
        props.coinsList.filter(
          (coin) =>
            coin.name
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            coin.symbol
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            coin.id.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <div className="search-box">
        <div id="home-search-container">
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            id="home-search"
            placeholder="Search Crypto"
            onChange={inputOnChange}
          />
        </div>
        <div id="suggestions-container">
          <ListGroup>
            {display &&
              suggestions.slice(0, 6).map((coin, index) => (
                <Link to={"/search/" + coin.id} key={coin.id}>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                    key={coin.id}
                    onClick={() => {
                      // Still need to work on re renders
                      setDisplay(false);
                    }}
                  >
                    <div className="name-container">
                      <span>
                        <img src={coin.image} alt={coin.name + " logo"} />
                      </span>
                      <span className="name-span">{coin.name}</span>
                    </div>
                    <div className="symbol-container">
                      <span>{coin.symbol.toUpperCase()}</span>
                    </div>
                  </button>
                </Link>
              ))}
          </ListGroup>
        </div>
      </div>
      <Switch>
        <Route
          path="/search/:id"
          children={<CoinInfo coinsList={props.coinsList} />}
        />
      </Switch>
    </div>
  );
};
export default SearchBar;
