import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CryptoRow from './CryptoRow';
import {Container, Table} from 'react-bootstrap';
import './CryptoTable.css';



function CryptoTable(){
    let [coins, setCoins] = useState([]);
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

    useEffect(() => {
        axios.get(url)
        .then(res =>{
            setCoins(res.data);
            //console.log(res.data);
        })
        .catch(error => console.log(error))
    }, []);

    /* Map Function */
    let renderCryptoData = () => {
        return coins.map((coin, index) => {
            return(
                <CryptoRow 
                rank={coin.market_cap_rank}
                img={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                percentageChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
                marketCap={coin.market_cap}
                supply={coin.circulating_supply} 
                />
            )
        })
    }
    

    return(
        <Container>
        <Table striped bordered hover variant='dark'>
            <thead className='crypto-home-header'>
            <tr>
                <th>
                    <p>Rank</p>
                </th>
                <th>
                    <p>Name</p>
                </th>
                <th>
                    <p>Price</p>
                </th>
                <th>
                    <p>24hr %</p>
                </th>
                <th>
                    <p>24hr Volume</p>
                </th>
                <th>
                    <p>Market Cap</p>
                </th>
                <th>
                    <p>Max Supply</p>
                </th>
            </tr>
            </thead>
            <tbody>
                {renderCryptoData()}
            </tbody>
        </Table>
        </Container>
    )
}

export default CryptoTable;