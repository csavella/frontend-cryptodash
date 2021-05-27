import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import CoinInfoHeader from './CoinInfoComponents/CoinInfoHeader';
import TradingViewGraph from './CoinInfoComponents/TradingViewGraph';
import MarketInfo from './CoinInfoComponents/MarketInfo';
import TradeableExchanges from './CoinInfoComponents/TradeableExchanges';
import ReactHtmlParser from 'react-html-parser';
import {Card} from 'react-bootstrap';
import './CoinInfo.css';

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
        const descriptionEl = description
        .split("https://www.coingecko.com/en/coins/")
        .join("/frontend-cryptodash/search/")
        .split("/coins/")
        .join("/frontend-cryptodash/search/");

        return ReactHtmlParser(descriptionEl);
    }
    
    /* use flex, divide into at least 3 different divs*/
    return (
        <div>
            <Card className="coin-info-card">
                <Card.Header className="result-header">
                    <CoinInfoHeader _id={id} _name={basicInfo.name} _img={basicInfo.image}/>
                </Card.Header> 
                <Card.Body>
                    <TradingViewGraph symbol={basicInfo.symbol} />
                </Card.Body>
            </Card>
            <Card className="coin-info-card">
                <Card.Header>
                    <h1>Market Data</h1> 
                </Card.Header>
                <Card.Body>
                    <MarketInfo data={basicInfo}/>
                </Card.Body> 
            </Card>
            <Card className="coin-info-card">
                <Card.Header>
                    <h1>Description</h1>
                </Card.Header>
                <Card.Body>
                    <div className="description-box">
                        {checkDescription() ? <div>{parseDescription()}</div> : null}
                    </div>
                </Card.Body>
            </Card>
            <Card className="coin-info-card">
                <Card.Header>
                    <h1>Exchanges</h1>
                </Card.Header>
                <Card.Body>
                    <TradeableExchanges id={id} />
                </Card.Body>
            </Card>
        </div>
    );
}


export default CoinInfo;