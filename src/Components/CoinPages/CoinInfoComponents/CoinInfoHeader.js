import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CoinInfo.css";
const CoinInfoHeader = ({ _id, _name, _img }) => {
  // Not set to real time yet. Just grabs real time data on initial load.
  const [realTimePrice, setRealTimePrice] = useState();

  useEffect(() => {
    let priceUrl =
      "https://api.coingecko.com/api/v3/simple/price?ids=" +
      _id +
      "&vs_currencies=usd";
    axios
      .get(priceUrl)
      .then((response) => {
        setRealTimePrice(response.data[_id].usd);
      })
      .catch((error) => console.log(error + ": Cannot get realtime price"));
  }, [_id, _name, realTimePrice]);

  const priceFormat = () => {
    return realTimePrice % 2 === 0
      ? realTimePrice.toLocaleString()
      : realTimePrice;
  };

  return (
    <div className="result-header-container" key={_id}>
      <div className="image-name-container">
        <span>
          <img src={_img} alt={_id + " logo"} />
        </span>
        <span>{_name}</span>
      </div>
      <div className="price-percent-container">
        <span>{"$" + priceFormat()}</span>
      </div>
    </div>
  );
};

export default CoinInfoHeader;
