import RTPriceFormattedTable from "../Tables/RTPriceFormattedTable";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({ favoriteCoins, setFavoriteCoins }) => {
  return (
    <RTPriceFormattedTable
      favoriteCoins={favoriteCoins}
      setFavoriteCoins={setFavoriteCoins}
    />
  );
};

export default Home;
