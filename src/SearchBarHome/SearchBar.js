import React, {useState} from 'react';
import {ListGroup} from 'react-bootstrap';
import "./SearchBar.css";

const SearchBar = (props) =>{
    /* display may not be necessary, just hides suggestions when no input field*/
    const [display, setDisplay] = useState(true);
    /* list of suggestions displayed */
    const [suggestions, setSuggestions] = useState([]);


    const inputOnChange = (event) =>{
        /* if no input, then hide suggestions */
        if(event.target.value.length === 0){
            setDisplay(false);
        }
        else{
            setDisplay(true);
            setSuggestions(props.coinsList.filter(coin => 
                (coin.name.toLowerCase().includes(event.target.value.toLowerCase()) || 
                coin.symbol.toLowerCase().includes(event.target.value.toLowerCase()) || 
                coin.id.toLowerCase().includes(event.target.value.toLowerCase()))))
        }
    }
    return(
        <div className="search-box">
            <div id="home-search-container">
                <input type="text" className="form-control" aria-label="Default" 
                id="home-search" placeholder="Search Crypto" onChange={inputOnChange} />
            </div>
            <div>
                <ListGroup>
                    {display && suggestions.slice(0, 6).map((coin, index) =>(
                        <button type="button" className="list-group-item list-group-item-action">
                            <div className="name-container">
                                <span>
                                    <img src={coin.image} alt={coin.name + " logo"}/>
                                </span>
                                <span class="name-span">{coin.name}</span>
                            </div>
                            <div className="symbol-container">
                                <span >{coin.symbol.toUpperCase()}</span>
                            </div>
                        </button>
                    ))}
                </ListGroup>
            </div>
        </div>
    );
}
export default SearchBar

