import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import RTPriceTable from "./RTPriceTable";

function RTPriceFormattedTable() {
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
      dataField: "percentageChange",
      text: "24hr Change",
      sort: true,
      formatter: percentFormatter,
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
      dataField: "supply",
      text: "Max Supply",
      sort: true,
    },
    {
      dataField: "toDelete",
      text: "Delete",
      formatter: deleteIconFormatter,
      hidden: true,
    },
  ];

  const [starClicked, setStarClicked] = useState(false);

  const ChangeStarColor = (e) => {
    setStarClicked(!starClicked);
  };

  function starIconFormatter(cell, row) {
    let starClass = starClicked ? "starBlue" : "starBlack";
    return (
      <FontAwesomeIcon
        className={starClass}
        icon={faStar}
        onClick={ChangeStarColor}
      >
        {cell}
      </FontAwesomeIcon>
    );
  }

  function deleteIconFormatter(cell, row) {
    return (
      <FontAwesomeIcon
        className="starBlack"
        icon={faTrash}
      >
        {cell}
      </FontAwesomeIcon>
    );
  }

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

  function priceFormatter(cell, row) {
    if (parseFloat(cell) < 999) {
      return <p>{"$" + cell}</p>;
    }
    return <p>{"$" + parseFloat(cell.toFixed(2)).toLocaleString()}</p>;
  }

  function percentFormatter(cell, row) {
    return <p>{parseFloat(cell.toFixed(2)).toLocaleString() + "%"}</p>;
  }

  return <RTPriceTable columns={columns} />;
}

export default RTPriceFormattedTable;
