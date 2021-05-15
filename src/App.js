import './App.css';
//import CryptoTable from './Tables/CryptoTable';
import SearchBar from './SearchBarHome/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
    let [coinsList, setCoinsList] = useState([]); 
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';

    /* Use effect in replace of componentDidMount() w/ Hooks */
    useEffect(() => {
        axios.get(url)
        .then(res =>{
            setCoinsList(res.data);
        })
        .catch(error => console.log(error))
    }, []);  

  return (
    <div className="App">
      <SearchBar coinsList={coinsList}/>
    </div>
  );

}


export default App;
