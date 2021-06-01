import { Container } from "react-bootstrap";
import "./Resources.css";

const Resources = () => {
  return (
    <Container className="resources-page">
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
      <br></br>

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
      <br></br>

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
      <br></br>

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
          <a className="resource-link" href="https://www.bitlox.com/">
            Bitlox
          </a>
          : User-friendly hardware wallet
        </li>
        <li>
          <a className="resource-link" href="https://atomicwallet.io/">
            Atomic Wallet
          </a>
          : Software wallet. Supports over 300 cryptocurrencies
        </li>
        <li>
          <a className="resource-link" href="https://www.infinitowallet.io/">
            Infinito Wallet
          </a>
          : Software wallet. Faster Transactions on global scale
        </li>
        <li>
          <a className="resource-link" href="https://www.bitcoinarmory.com/">
            Armory
          </a>
          : Software wallet. Compatible with Mac, Linux, and Windows. Tight
          security system
        </li>
        <li>
          <a
            className="resource-link"
            href="https://ripplecoinnews.com/go/guarda-wallet"
          >
            Guarda Wallet
          </a>
          : Software wallet. Includes more than 10,000 tokens and 40 well-known
          blockchains
        </li>
      </ul>
      <br></br>

      <h3>YouTube Channels and Podcasts</h3>
      <ul>
        <li>
          <a
            className="resource-link"
            href="https://www.youtube.com/channel/UCqK_GSMbpiV8spgD3ZGloSw"
          >
            Coin Bureau
          </a>
          : YouTube channel that provides educational videos for cryptocurrency
          newbies
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.youtube.com/channel/UCwsRWmIL5XKqFtdytBfeX0g"
          >
            Crypto Crow
          </a>
          : YouTube channel that provides news and Updates on Cryptocurrencies,
          blockchains, and ICOs
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.youtube.com/channel/UCRQkQ8YlIY2LlTWGjdo1Opw"
          >
            Cryptosomniac
          </a>
          : YouTube channel that provides updates on cryptocurrency news and
          trading. Educational Crypto content
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.youtube.com/channel/UCd4bJKIvbGOIAT-GK4K-3_w"
          >
            Digital Gold
          </a>
          : YouTube channel that provides news and updates on mining
        </li>
        <li>
          <a className="resource-link" href="https://unchainedpodcast.com/">
            Unchained
          </a>
          : Podcast that provides news on a weekly basis
        </li>
        <li>
          <a className="resource-link" href="https://badcryptopodcast.com/">
            Bad Crypto
          </a>
          : Global podcast that provides information about ICOs, Blockchain,
          Ethereum, etc.
        </li>
        <li>
          <a
            className="resource-link"
            href="https://ledgerstatus.com/topic/ledgercast/"
          >
            Ledger Cast
          </a>
          : Content on Blockchain and Cryptocurrency community
        </li>
      </ul>
      <br></br>

      <h3>Books and Courses</h3>
      <ul>
        <li>
          <a
            className="resource-link"
            href="https://www.amazon.com/gp/product/1979688362/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=coindiligent-20&creative=9325&linkCode=as2&creativeASIN=1979688362&linkId=cda5776063dba5e46022e9bf32eb5df8"
          >
            Cryptocurrency Investing Bible by Alan T. Norman
          </a>
          : Cryptocurrency community for beginners
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.amazon.com/Blockchain-Basics-Non-Technical-Introduction-Steps/dp/1484226038/ref=asc_df_1484226038/?tag=hyprod-20&linkCode=df0&hvadid=312140868236&hvpos=&hvnetw=g&hvrand=9035098506546313839&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9032828&hvtargid=pla-315913527774&psc=1"
          >
            Blockchain Basics: A Non-Technical Introduction in 25 Steps by
            Daniel Drescher
          </a>
          : Basic information and foundation on Blockchain and Cryptocurrency
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.amazon.com/gp/product/B07DKVJJV8/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=nathanrose-20&creative=9325&linkCode=as2&creativeASIN=B07DKVJJV8&linkId=22d428d2e717810e0cbe717dd9906104"
          >
            The Crypto Intro: Guide To Mastering Bitcoin, Ethereum, Litecoin,
            Cryptoassets, Blockchain &amp; Cryptocurrency Investing (Alternative
            Finance Series) by Nathan Rose
          </a>
          : Cryptocurrency exchange, digital tokens, cryptocurrency wallets
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.amazon.com/gp/product/1119473861/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=coindiligent-20&creative=9325&linkCode=as2&creativeASIN=1119473861&linkId=b5084f43715eb249ef9b997f7f664af3"
          >
            The Bitcoin Standard: The Decentralized Alternative to Central
            Banking by Saifedean Ammous
          </a>
          : One of the most popular book on cryptocurrency
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.amazon.com/Internet-Money-Andreas-M-Antonopoulos/dp/1537000454"
          >
            The Internet of Money: A collection of talks by Andreas M.
            Antonopoulos by Andreas Antonopoulos
          </a>
          : Explores the technical functioning of the bitcoin network by
          illuminating bitcoin's philosophical, social, and historical
          implications
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.udemy.com/course/cryptocurrency-trading/?LSNPUBID=vedj0cWlu2Y&ranEAID=vedj0cWlu2Y&ranMID=39197&ranSiteID=vedj0cWlu2Y-ADtDteHrkdeq9hAoNIxCDg&utm_medium=udemyads&utm_source=aff-campaign"
          >
            Cryptocurrency Trading: Complete Guide To Trading Altcoins
          </a>
          : Online course. Learn about the community of cryptocurrency and
          methods to avoid scams and hacks
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.unic.ac.cy/blockchain/free-mooc/"
          >
            DFIN 511: Introduction to Digital Currencies
          </a>
          : Online course, free of cost. Launched by University of Nicosia
        </li>
        <li>
          <a
            className="resource-link"
            href="https://developer.ibm.com/tutorials/cl-ibm-blockchain-101-quick-start-guide-for-developers-bluemix-trs/"
          >
            IBM Blockchain 101: Quick-start guide for developers
          </a>
          : Online course for crypto developers
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.udemy.com/course/cryptocurrency-wallet/?LSNPUBID=vedj0cWlu2Y&ranEAID=vedj0cWlu2Y&ranMID=39197&ranSiteID=vedj0cWlu2Y-mrAuKtZOhjgG.8A3DeoYWA&utm_medium=udemyads&utm_source=aff-campaign"
          >
            Cryptocurrency Wallets Course: Secure Your Cryptos Safely
          </a>
          : Learn everything about Cryptocurrency security
        </li>
        <li>
          <a
            className="resource-link"
            href="https://www.udemy.com/course/draft/718338/?LSNPUBID=vedj0cWlu2Y&ranEAID=vedj0cWlu2Y&ranMID=39197&ranSiteID=vedj0cWlu2Y-_5ZWFLWrp__u1ETHWRrsZw&utm_medium=udemyads&utm_source=aff-campaign"
          >
            How to Join the Bitcoin Revolution
          </a>
          : Detailed courses on Bitcoin basics. Financial system, scams, hacks,
          etc.
        </li>
      </ul>
      <br></br>

      <h3>Forums</h3>
      <ul>
        <li>
          <a className="resource-link" href="https://emerging.technology/">
            Emerging Technology
          </a>
          : Discussions about earning money with Crypto, Blockchain, AI, VR, 3D
          Printing, Drones, etc.
        </li>
        <li>
          <a className="resource-link" href="https://cryptorum.com/">
            Cryptorum
          </a>
          : Around 70 threads available. Educational forum on cryptocurrency
        </li>
        <li>
          <a className="resource-link" href="https://steemit.com/">
            Steemit
          </a>
          : The first global social network in the cryptocurrency sector
        </li>
      </ul>
    </Container>
  );
};

export default Resources;
