import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToggleList from "./ToggleList";
import "./RTPriceTable.css";

function RTPriceTable({ columns }) {
  const { SearchBar } = Search;
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false";

  //only get top 30 coins
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
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  /* Render data by mapping & creating each 'CryptoRow' component */
  let renderCryptoData = () => {
    let coinData = [];
    for (let i = 0; i < coins.length; i++) {
      let tempObject = {
        rank: coins[i].market_cap_rank,
        img: coins[i].image,
        symbol: coins[i].symbol,
        name: coins[i].name,
        price: coins[i].current_price,
        amountChange: coins[i].price_change_24h,
        percentageChange: coins[i].price_change_percentage_24h,
        volume: coins[i].total_volume,
        marketCap: coins[i].market_cap,
        valuation: coins[i].fully_diluted_valuation,
        supply:
          coins[i].circulating_supply + " " + coins[i].symbol.toUpperCase(),
      };
      coinData.push(tempObject);
    }
    return coinData;
  };

  const [show, setShow] = useState(false);
  function handleclick(event) {
    setShow(!show);
  }

  return (
    <Container>
      <div className="row justify-content-between rt-price-table-header">
        <h2 className="col-8 temp-title">Real Time Performance</h2>
      </div>
      <div className="row">
        <ToolkitProvider
          keyField="rank"
          data={renderCryptoData()}
          columns={columns}
          columnToggle
          search
        >
          {(props) => (
            <div>
              <div
                className="row justify-content-end"
                style={{
                  margin: 1 + "px",
                  border: "none",
                }}
              >
                <div
                  className="card card-body col-2"
                  style={{
                    padding: 5 + "px",
                    border: "none",
                  }}
                >
                  <SearchBar {...props.searchProps} />
                </div>
                <div
                  className="card card-body col-4"
                  style={{
                    padding: 5 + "px",
                    border: "none",
                  }}
                ></div>
                <div
                  className="card card-body col-4"
                  style={{
                    padding: 5 + "px",
                    border: "none",
                    textAlign: "left",
                    display: show ? "block" : "none",
                  }}
                >
                  <ToggleList columns={columns} {...props.columnToggleProps} />
                </div>
                <button
                  id="showHideColumns"
                  className="btn btn-light col-2"
                  onClick={(event) => handleclick(event)}
                  style={{
                    height: "auto",
                    padding: 5 + "px",
                  }}
                >
                  Show/Hide Columns
                </button>
              </div>
              <hr />
              <BootstrapTable
                pagination={paginationFactory()}
                striped
                bordered
                hover
                size="sm"
                responsive
                className="col-12"
                {...props.baseProps}
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    </Container>
  );
}

export default RTPriceTable;
