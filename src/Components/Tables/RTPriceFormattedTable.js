import RTPriceTable from "./RTPriceTable";

function RTPriceFormattedTable() {
  const columns = [
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
      formatter: nameFormatter,
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
  // Eric added in for navigating to results pages
  function nameFormatter(cell, row){
    if(cell === null) return <p></p>;
    return (
      <a href={"/frontend-cryptodash/search/" + row.id} className="anchor-name-item">{cell}</a>
    )
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

  return <RTPriceTable columns={columns} />;
}

export default RTPriceFormattedTable;
