import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import "./RTPriceTable.css";

const columns = [
  {
    dataField: "rank",
    text: "Rank",
  },
  {
    dataField: "img",
    text: "Coin",
    formatter: imgFormatter,
  },
  {
    dataField: "price",
    text: "Price",
  },
  {
    dataField: "percentageChange",
    text: "24hr Change",
  },
  {
    dataField: "volume",
    text: "24hr Volume",
  },
  {
    dataField: "marketCap",
    text: "Market Cap",
  },
  {
    dataField: "supply",
    text: "Max Supply",
  },
  {
    dataField: "toDelete",
    text: "Delete",
    hidden: true,
  },
];

function imgFormatter(cell, row) {
  return (
    <img
      src={cell}
      alt={cell.symbol + "logo"}
      className="coin-item"
      style={({ height: 2 + "em" }, { width: 2 + "em" })}
    />
  );
}

const CustomToggleList = ({ columns, onColumnToggle, toggles }) => (
  <div className="text-center">
    {columns
      .map((column) => ({
        ...column,
        toggle: toggles[column.dataField],
      }))
      .map((column, index) =>
        index === 0 ? (
          <Form.Check
            type="button"
            key={column.dataField}
            inline
            label="Edit Table"
            id={column.dataField}
            checked={column.toggle}
            aria-checked={column.toggle ? "true" : "false"}
            onClick={() =>
              //onColumnToggle(column.dataField),
              onColumnToggle(columns[columns.length - 1].dataField)
            }
          />
        ) : null
      )}
  </div>
);

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
        price: coins[i].current_price,
        percentageChange: coins[i].price_change_percentage_24h,
        volume: coins[i].total_volume,
        marketCap: coins[i].market_cap,
        supply: coins[i].circulating_supply,
        toDelete: "button",
      };
      coinData.push(tempObject);
    }
    return coinData;
  };

  return (
    <Container>
      <div className="row justify-content-between rt-price-table-header">
        <h2 className="col-8 temp-title">Real Time Performance</h2>
      </div>
      <div className="row">
        <ToolkitProvider
          keyField="id"
          data={renderCryptoData()}
          columns={columns}
          columnToggle
        >
          {(props) => (
            <div>
              <div
                className="card card-body"
                style={{
                  padding: 5 + "px",
                  display: "block",
                }}
              >
                <CustomToggleList {...props.columnToggleProps} />
              </div>
              <hr />
              <BootstrapTable
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
