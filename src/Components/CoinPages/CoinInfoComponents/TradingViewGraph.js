import React from 'react';
import TradingViewWidget, {Themes} from 'react-tradingview-widget';

const TradingViewGraph = ({symbol}) =>{
    return(
       <div key={symbol + "_graph"}>
            <TradingViewWidget 
            symbol={symbol + "USD"} 
            range="all" 
            interval="D" 
            theme={Themes.LIGHT}/>
       </div>
   ) 
}

export default TradingViewGraph;