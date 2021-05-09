import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CryptoRow from './Components/CryptoRow';




function CryptoTable(){
    let [coins, setCoins] = useState([]);
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

    useEffect(() => {
        setInterval(() => {
            axios.get(url)
            .then(res =>{
                setCoins(res.data);
                console.log(typeof res.data);
            })
            .catch(error => console.log(error))
        }, 30000);
    }, []);

    /* Map Function */
    let renderCryptoData = () => {
        return coins.map((coin, index) => {
            // const {rank: market_cap_rank, 
            //     img: image, 
            //     symbol: symbol,
            //     price: current_price,
            //     percentageChange: price_change_percentage_24h,
            //     volume: total_volume,
            //     marketCap: market_cap,
            //     supply: total_supply            
            // } = coin;
            return(
                <CryptoRow 
                rank={coin.market_cap_rank}
                img={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                percentageChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
                marketCap={coin.market_cap}
                supply={coin.total_supply} 
                />
            )
        })
    }
    

    return(
        <table className='crypto-home'>
            <thead className='crypto-home-header'>
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
            </thead>
            <tbody>
                {renderCryptoData()}
            </tbody>
        </table>
    )
}

// let fetchRealTime = () =>{
// }


export default CryptoTable;