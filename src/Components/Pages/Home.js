import PairTable from '../CryptoPair/PairTable';
import RTPriceFormattedTable from "../Tables/RTPriceFormattedTable";
import TradingChart from "../TradingChart";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
      <div>
          <RTPriceFormattedTable />
          <TradingChart />
          <PairTable />
      </div>
  
    );

};

export default Home;
