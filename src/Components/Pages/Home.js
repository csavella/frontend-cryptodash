import RTPriceFormattedTable from "../Tables/RTPriceFormattedTable";
import TradingChart from "../TradingChart";
import "bootstrap/dist/css/bootstrap.min.css";
// import React,{useContext} from 'react';
// import {chartContext} from '../chartContext';

const Home = () => {
  // const {value,setValue} = useContext(chartContext); 
  return (
      <div>
          <RTPriceFormattedTable />      
          <TradingChart />     
      </div>  
    );

};

export default Home;
