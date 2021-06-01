import React, { useEffect, useState } from "react";
import axios from "axios";

const TradeableExchanges = ({ id }) => {
  const [exchangeData, setExchangeData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const url =
    "https://api.coingecko.com/api/v3/coins/" +
    id +
    "?tickers=true&market_data=false&community_data=false&developer_data=false&sparkline=false";

  async function getExchangeData() {
    const response = await axios.get(url);
    return response.data;
  }

  useEffect(() => {
    getExchangeData()
      .then((data) => {
        setExchangeData(data.tickers);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.log(error.message + " for " + id);
        setDataLoaded(false);
      });
  }, [id]);

  return (
    <div className="tradeable-exchanges-container">
      <ul>
        {dataLoaded &&
          Object.keys(exchangeData)
            .slice(0, 4)
            .map((key) => {
              let trade_url = exchangeData[key].trade_url;
              let name = exchangeData[key].market.name;
              return (
                <li>
                  <a href={trade_url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </li>
              );
            })}
      </ul>
    </div>
  );
};
export default TradeableExchanges;
