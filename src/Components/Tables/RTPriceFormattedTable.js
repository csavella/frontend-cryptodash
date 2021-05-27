import {useState} from "react";
import RTPriceTable from "./RTPriceTable";
import FavoriteCoins from "./FavoriteCoins";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function RTPriceFormattedTable({ favoriteCoins, setFavoriteCoins }) {
  const columns = [
    {
      dataField: "favorite",
      text: "",
      formatter: starIconFormatter,
    },
    {
      dataField: "rank",
      text: "Rank",
      sort: true,
      defaultSortDirection: "asc",
    },
    {
      dataField: "img",
      text: "Coin",
      formatter: imgFormatter,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
      formatter: priceFormatter,
    },
    {
      dataField: "amountChange",
      text: "24hr Change",
      sort: true,
      formatter: priceFormatter,
    },
    {
      dataField: "percentageChange",
      text: "24hr % Change",
      sort: true,
      formatter: percentFormatter,
      hidden: true,
    },
    {
      dataField: "volume",
      text: "24hr Volume",
      sort: true,
      formatter: priceFormatter,
    },
    {
      dataField: "marketCap",
      text: "Market Cap",
      sort: true,
      formatter: priceFormatter,
    },
    {
      dataField: "valuation",
      text: "Fully Diluted Val",
      sort: true,
      formatter: priceFormatter,
      hidden: true,
    },
    {
      dataField: "supply",
      text: "Max Supply",
      sort: true,
    },
  ];

  const [iconColor, setIconColor] = useState("black");

  function handleclick(row) {
    if (row === null) return;
    var tempFaves = favoriteCoins;
    tempFaves.push(row);
    setFavoriteCoins([...tempFaves]);
  }

  function changeColor(){
    if(iconColor === "black") {
      setIconColor("blue");
    } else {
      setIconColor("black");
    }
    
  }

  function starIconFormatter(cell, row) {
    if (cell === null) return <p></p>;
    return (
      <button className="btn favorite" onClick={() => handleclick({ row })} style={{backgroundColor: "transparent"}}>
      <FontAwesomeIcon
        onClick={() => changeColor()}
        icon={faStar}
        style={{color: {iconColor}}}
      >{cell}</FontAwesomeIcon></button>
    );
  }

  function imgFormatter(cell, row) {
    if (cell === null) return <p></p>;

    return (
      <img
        src={cell}
        alt={cell.symbol + "logo"}
        className="coin-item"
        style={({ height: 2 + "em" }, { width: 2 + "em" })}
      />
    );
  }

  function priceFormatter(cell, row) {
    if (cell === null) return <p></p>;

    if (parseFloat(cell) < 999) {
      return <p>{"$" + cell}</p>;
    }
    return <p>{"$" + parseFloat(cell.toFixed(2)).toLocaleString()}</p>;
  }

  function percentFormatter(cell, row) {
    if (cell === null) return <p></p>;

    return <p>{parseFloat(cell.toFixed(2)).toLocaleString() + "%"}</p>;
  }

  return (
    <div>
      <RTPriceTable columns={columns} />
      <FavoriteCoins faves={ favoriteCoins} setFavoriteCoins={setFavoriteCoins }/>
    </div>
  );
}

export default RTPriceFormattedTable;
