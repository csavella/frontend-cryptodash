import React from "react";
import "./RTPriceTable.css";

let RTPriceRows = ({
  rank,
  img,
  symbol,
  price,
  percentageChange,
  volume,
  marketCap,
  supply,
  toDelete
}) => {
  return (
    <tr className="coin-row" key={rank}>
      <td className="coin-cell">
        <div className="coin-item">
          <p className="coin-rank">{rank}</p>
        </div>
      </td>
      <td className="coin-cell">
        <div className="coin-item">
          <img src={img} alt={symbol + "logo"} />
        </div>
      </td>
      <td className="coin-cell">
        <div className="coin-item">
          {price < 999 ? (
            <p className="coin-price">{"$" + price}</p>
          ) : (
            <p className="coin-price">
              {"$" + parseFloat(price.toFixed(2)).toLocaleString()}
            </p>
          )}
        </div>
      </td>
      <td className="coin-cell">
        <div className="coin-item">
          <p className="coin-percentage-change">
            {parseFloat(percentageChange.toFixed(2)).toLocaleString() + "%"}
          </p>
        </div>
      </td>
      <td className="coin-cell">
        <div className="coin-item">
          <p className="coin-volume">{"$" + volume.toLocaleString()}</p>
        </div>
      </td>
      <td className="coin-cell">
        <div className="coin-item">
          <p className="coin-market-cap">{"$" + marketCap.toLocaleString()}</p>
        </div>
      </td>
      <td className="coin-cell">
        <div className="coin-item">
          <p className="coin-supply">
            {parseFloat(supply.toFixed(0)).toLocaleString() +
              " " +
              symbol.toUpperCase()}
          </p>
        </div>
      </td>
      <td className="coin-cell delete">
        <div className="coin-item">
          <p>{toDelete}</p>
        </div>
      </td>
    </tr>
  );
};

export default RTPriceRows;
