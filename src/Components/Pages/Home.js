import PairTable from '../CryptoPair/PairTable';
import RTPriceFormattedTable from "../Tables/RTPriceFormattedTable";
import TradingChart from "../TradingChart";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
      <div>
          <RTPriceFormattedTable />
          <PairTable />
          <TradingChart />
          
      </div>
  
    );

};

export default Home;
