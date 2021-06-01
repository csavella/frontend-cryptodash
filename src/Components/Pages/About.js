import { Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="justify-content-center about-page" style={{margin:"auto"}}>
      <h2 style={{ textAlign: "center", margin: 2 + "em" }}>About</h2>
      <img
        className="img-fluid rounded mx-auto d-block about-img"
        src="https://www.moneycrashers.com/wp-content/uploads/2016/02/array-cryptocurrency-coins-1068x713.jpg"
        alt="Coins"
        style={{ height: "auto", width: 50 + "vw" }}
      ></img>

      <p>
        CryptoDash is a React dashboard application that provides highlighted,
        in-depth information for monitoring cryptocurrencies in a streamlined,
        at-a-glance interface, providing easy navigation for all users.
      </p>

      <h3>Features</h3>
      <ul>
        <li>Real time price in USD for each cryptocurrency</li>
        <li>Percentage change for each cryptocurrency</li>
        <li>Charts including historical data</li>
        <li>Crypto pair information</li>
        <li>Percent total crypto market performance</li>
        <li>
          Overlapping graph of multiple cryptocurrency trading rates in USD
        </li>
        <li>
          Options for saving your favorite crypto and crypto pair data on
          dashboard
        </li>
        <li>Search for data on specific coins</li>
        <li>Glossary of common crypto terms</li>
        <li>Additional educational resources</li>
      </ul>

      <h3>Source</h3>
      <a
        className="resource-link"
        href="https://github.com/csavella/frontend-cryptodash"
      >
        Link to GitHub
      </a>
    </Container>
  );
};

export default About;
