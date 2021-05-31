import { Container } from "react-bootstrap";
import "./Resources.css";

const Resources = () => {
  return (
    <Container className="resources-page" style={{ margin: 2 + "em" }}>
      <h2 style={{ textAlign: "center", margin: 2 + "em" }}>
        Cryptocurrency Resources
      </h2>

      <h3>Latest News</h3>
      <ul>
        <li>
          <a className="resource-link" href="https://www.coindesk.com/">
            CoinDesk
          </a>
          : Global media platform for digital currencies
        </li>
        <li>
          <a className="resource-link" href="https://www.ccn.com/">
            CCN
          </a>
          : Monitor and check on cryptocurrency scams
        </li>
        <li>
          <a className="resource-link" href="https://nulltx.com/">
            Null Tx
          </a>
          : Latest news and educational content
        </li>
        <li>
          <a className="resource-link" href="http://newsbtc.com/">
            NEWSBTC
          </a>
          : News on all presently-trading cryptocurrencies
        </li>
        <li>
          <a className="resource-link" href="https://bitcoinist.com/">
            Bitcoinist
          </a>
          : Blockchain, cryptocurrency, bitcoin
        </li>
      </ul>

      <h3>Mining Estimation Tools</h3>
      <ul>
        <li>
          <a
            className="resource-link"
            href="https://www.coinwarz.com/mining/calculators"
          >
            Coin Warz
          </a>
          : Profitability and calculators
        </li>
        <li>
          <a
            className="resource-link"
            href="https://whattomine.com/calculators"
          >
            What to Mine
          </a>
          : Profitability and calculators
        </li>
        <li>
          <a
            className="resource-link"
            href="https://cryptomining.tools/calculator"
          >
            Crypto Mining Tools
          </a>
          : Estimate difficulty of mining and possible profitability
        </li>
      </ul>

      <h3>Blockchain Development</h3>
      <ul>
        <li>
          <a
            className="resource-link"
            href="https://github.com/jpmorganchase/cakeshop"
          >
            Cake Shop
          </a>
          : Local blockchain development
        </li>
        <li>
          <a
            className="resource-link"
            href="https://github.com/apache/incubator-tuweni"
          >
            Tuweni
          </a>
          : Library to aid in deveopment of blockchain and other decentralized
          software
        </li>
        <li>
          <a
            className="resource-link"
            href="https://github.com/ethereum/mist/releases"
          >
            Mist
          </a>
          : Full node wallet. Created by Ethereum
        </li>
        <li>
          <a
            className="resource-link"
            href="https://geth.ethereum.org/docs/getting-started"
          >
            Geth
          </a>
          : Create smart contacts, mining, tokens, etc
        </li>
        <li>
          <a
            className="resource-link"
            href="https://remix.ethereum.org/#optimize=false&evmVersion=null"
          >
            Remix IDE
          </a>
          : Create solidity contracts. Increased IDE functionality
        </li>
      </ul>

      <h3>Wallets</h3>
      <ul>
        <li>
          <a
            className="resource-link"
            href="https://shop.ledger.com/products/ledger-nano-x?source=aw&awc=17181_1622437870_8867004a1ef3ddddd1021e85771c9e3b&utm_source=awin&utm_campaign=617983"
          >
            Ledger Nano
          </a>
          : Hardware wallet. Compatible with Android, desktop computer, and iOS
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.bitlox.com/"
          >
            Bitlox
          </a>
          : User-friendly hardware wallet
        </li>
        <li>
          <a
            className="resource-link"
            href="https://atomicwallet.io/"
          >
            Atomic Wallet
          </a>
          : Software wallet. Supports over 300 cryptocurrencies
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.infinitowallet.io/"
          >
            Infinito Wallet
          </a>
          : Software wallet. Faster Transactions on global scale
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.bitcoinarmory.com/"
          >
            Armory
          </a>
          : Software wallet. Compatible with Mac, Linux, and Windows. Tight security system
        </li>
        <li>
          <a
            className="resource-link"
            href="https://ripplecoinnews.com/go/guarda-wallet"
          >
            Guarda Wallet
          </a>
          : Software wallet. Includes more than 10,000 tokens and 40 well-known blockchains
        </li>
      </ul>
    </Container>
  );
};

export default Resources;
