import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

function FavoriteCoins({ faves, setFavoriteCoins }) {
  function removeCard(coinRank) {
    var changed = false;
    var tempFaves = faves;

    for (var i = 0; i < faves.length; i++) {
      if (faves[i].row.rank === coinRank) {
        tempFaves.splice(i, 1);
        changed = true;
        break;
      }
    }

    if (changed) {
      setFavoriteCoins([...tempFaves]);
    }
  }

  function createSlides() {
    if (faves.length === 0) {
      return (
        <Carousel.Item>
          <Card
            className="default-faves d-block w-75"
            style={{ margin: "auto" }}
          >
            <Card.Header>Your faves will go here!</Card.Header>
            <Card.Body>
              <Card.Title>Favorite Coins</Card.Title>
              <Card.Text>
                You haven't added any favorites yet! Add a coin to your
                favorites by clicking a star in one of the rows above.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      );
    }

    let newCarousel = faves.map((data) => {
      return (
        <Carousel.Item key={data.row.rank}>
          <Card
            className="default-faves d-block w-75"
            style={{ margin: "auto" }}
          >
            <Card.Header>Favorite Coins</Card.Header>
            <Card.Body>
              <Card.Title>{data.row.name}</Card.Title>
              <Card.Text>
                Price: ${data.row.price}
                <br></br>
                Rank: {data.row.rank}
                <br></br>
                Percentage Change: {data.row.percentageChange}&#37;<br></br>
                Market Cap: {data.row.marketCap}
              </Card.Text>
              <Card.Link>More Info</Card.Link>
              <Card.Link onClick={() => removeCard(data.row.rank)}>
                Remove
              </Card.Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
      );
    });

    return newCarousel;
  }

  return (
    <div>
      <Container>
        <Carousel slide={false} fade={false}>
          {createSlides()}
        </Carousel>
        <hr></hr>
      </Container>
    </div>
  );
}

export default FavoriteCoins;
