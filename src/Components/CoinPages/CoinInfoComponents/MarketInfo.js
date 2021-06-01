import React, { useEffect, useState } from "react";

const MarketInfo = (props) => {
  const [marketData, setMarketData] = useState();

  useEffect(() => {
    setMarketData(props.data);
  }, [props.data]);

  // Helper functions
  function isFloat(n) {
    return n === +n && n !== (n | 0);
  }

  function isInteger(n) {
    return n === +n && n === (n | 0);
  }

  return (
    <div className="market-data-container">
      <div className="data-container">
        {marketData &&
          Object.keys(marketData)
            .slice(5, 24)
            .map((key, index) => {
              // Will be the name of the market data item
              let percentIndicator = false;
              let dateIndicator = false;
              let spacedKey = key.split("_");
              if (spacedKey.includes("percentage")) {
                percentIndicator = true;
              } else if (spacedKey.includes("date")) {
                dateIndicator = true;
              }
              spacedKey = spacedKey.join(" ");
              let capitalizedKey =
                spacedKey.charAt(0).toUpperCase() + spacedKey.slice(1);

              // Set to N/A if null
              if (marketData[key] === null) {
                return (
                  <div>
                    <span className="data-key">{capitalizedKey + ": "}</span>
                    <span className="data-value">N/A</span>
                  </div>
                );
              } else if (dateIndicator) {
                let date = marketData[key].split("T");
                return (
                  <div>
                    <span className="data-key">{capitalizedKey + ": "}</span>
                    <span className="data-value">{date[0]}</span>
                  </div>
                );
              } else if (isInteger(marketData[key])) {
                return (
                  <div>
                    <span className="data-key">{capitalizedKey + ": "}</span>
                    <span className="data-value">
                      {marketData[key].toLocaleString()}
                    </span>
                  </div>
                );
              } else if (isFloat(marketData[key])) {
                if (percentIndicator) {
                  return (
                    <div>
                      <span className="data-key">{capitalizedKey + ": "}</span>
                      <span className="data-value">
                        {marketData[key].toFixed(3) + "%"}
                      </span>
                    </div>
                  );
                }
                return (
                  <div>
                    <span className="data-key">{capitalizedKey + ": "}</span>
                    <span className="data-value">
                      {parseFloat(marketData[key].toFixed(20)).toLocaleString()}
                    </span>
                  </div>
                );
              }
              return (
                <div>
                  <span className="data-key">{capitalizedKey + ": "}</span>
                  <span className="data-value">{marketData[key]}</span>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default MarketInfo;
