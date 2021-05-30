import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import CoinInfoHeader from './CoinInfoComponents/CoinInfoHeader';
import TradingViewGraph from './CoinInfoComponents/TradingViewGraph';
import MarketInfo from './CoinInfoComponents/MarketInfo';
import TradeableExchanges from './CoinInfoComponents/TradeableExchanges';
import ReactHtmlParser from 'react-html-parser';
import {Card} from 'react-bootstrap';
import './CoinInfo.css';

const PageNotFound = () =>{
    return (
        <div className="page-not-found">
            <h1>Page Not Found</h1>
            <p>Sorry, there is nothing to see here.</p>
            <p><Link to="/">Back to Home</Link></p>
        </div> )
}

const CoinInfo = (props) =>{
    const {id} = useParams();
    const dataUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + id + '&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const descriptionUrl = 'https://api.coingecko.com/api/v3/coins/' + id +'?tickers=false&market_data=false&developer_data=false';
    const [basicInfo, setBasicInfo] = useState({});
    const [description, setDescription] = useState("");
    
    /* get image and name based on id */
    useEffect(() => {
        axios.get(dataUrl)
        .then(response =>{
            setBasicInfo(response.data[0]);
        })
        .catch(error => console.log(error));
        axios.get(descriptionUrl)
        .then(response =>{
            setDescription(response.data.description.en);
        })
        .catch(error => console.log(error));
    }, [dataUrl, descriptionUrl]);

    /* Check if there is a discription */
    const checkDescription = () =>{
        if(description === "" || description === null) return false;
        return true;
    }

    const parseDescription = () =>{
        console.log(description);
        const descriptionEl = description
        .split("https://www.coingecko.com/en/coins/")
        .join("/frontend-cryptodash/search/")
        .split("/coins/")
        .join("/frontend-cryptodash/search/")
        .split('">')
        .join('" target="_blank" rel="noopener noreferrer">');
        /* target="_blank" rel="noopener noreferrer" */

        return ReactHtmlParser(descriptionEl);
    }

    const nameUndefined = () => {
        if(basicInfo === undefined){
            return true
        }
        return false;
    }
    
    /* use flex, divide into at least 3 different divs*/
    return (
        <div>
        {nameUndefined() ? <PageNotFound /> : 
           <div> 
            <Card>
                <Card.Header className="result-header">
                    <CoinInfoHeader _id={id} _name={basicInfo.name} _img={basicInfo.image}/>
                </Card.Header> 
                <Card.Body>
                    <TradingViewGraph symbol={basicInfo.symbol} />
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    <h1>Market Data</h1> 
                </Card.Header>
                <Card.Body>
                    <MarketInfo data={basicInfo}/>
                </Card.Body> 
            </Card>
            <Card>
                <Card.Header>
                    <h1>Description</h1>
                </Card.Header>
                <Card.Body>
                    <div className="description-box">
                        {checkDescription() ? <div>{parseDescription()}</div> : null}
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    <h1>Exchanges</h1>
                </Card.Header>
                <Card.Body>
                    <TradeableExchanges id={id} />
                </Card.Body>
            </Card>
            </div>
        }
        </div>
    );
    /*
    return (
        <div>
            <Card>
                <Card.Header className="result-header">
                    <CoinInfoHeader _id={id} _name={basicInfo.name} _img={basicInfo.image}/>
                </Card.Header> 
                <Card.Body>
                    <TradingViewGraph symbol={basicInfo.symbol} />
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    <h1>Market Data</h1> 
                </Card.Header>
                <Card.Body>
                    <MarketInfo data={basicInfo}/>
                </Card.Body> 
            </Card>
            <Card>
                <Card.Header>
                    <h1>Description</h1>
                </Card.Header>
                <Card.Body>
                    <div className="description-box">
                        {checkDescription() ? <div>{parseDescription()}</div> : null}
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    <h1>Exchanges</h1>
                </Card.Header>
                <Card.Body>
                    <TradeableExchanges id={id} />
                </Card.Body>
            </Card>
        </div>
    );
    */
}


export default CoinInfo;