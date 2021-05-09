import React from 'react';

let CryptoRow = ({rank, img, symbol, price, percentageChange, volume, marketCap, supply}) =>{
    return(
        <tr className="coin-row">
            <td>
                <div>
                    <p>{rank}</p>
                </div>
            </td>
            <td>
                <div>
                    <img src={img} alt={symbol + "logo"} />
                    <p>{symbol}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{"$" + price}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{percentageChange + "%"}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{"$" + volume}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{"$" + marketCap}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{supply}</p>
                </div>
            </td>
        </tr>
    )
}

export default CryptoRow;