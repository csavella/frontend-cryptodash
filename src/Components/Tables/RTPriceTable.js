import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoRow from "./RTPriceRows";
import { Container, Table } from "react-bootstrap";
import "./RTPriceTable.css";

function RTPriceTable() {
  //only get top 10 coins
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  const callAPI = async () => {
    try {
      const APIresults = await axios.get(url);
      setCoins(APIresults.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    callAPI();

    const interval = setInterval(() => {
      callAPI();
      console.log("interval calling");
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  /* Render data by mapping & creating each 'CryptoRow' component
       renderCryptoData() called in returning statement on line:73 */
  let renderCryptoData = () => {
    return coins.map((coin, index) => {
      return (
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
      );
    });
  };

  return (
    <Container>
      <Table striped bordered hover variant="dark" size="sm" responsive>
        <thead className="crypto-home-header">
          <tr>
            <th>
              <p>Rank</p>
            </th>
            <th>
              <p>Coin</p>
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
        <tbody>{renderCryptoData()}</tbody>
      </Table>
    </Container>
  );
}

export default RTPriceTable;
