import React,{useEffect, useState} from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import CompareCoinsPopup from './CompareCoinsPopup';
import './PairTable.css';

export default function PairTable(){
    const axios = require('axios').default;

    const[selectCoinsList,setSelectCoinsList] = useState([]);// data from coins/markets
    const[selectVsCurrencies,setSelectVsCurrencies] = useState([]); // data from supported_vs_currencies
    const[popupData,setPopupdata] = useState([]); //Pop up box data
    const[popupBox,setPopupBox] = useState('false'); //On/off switch for pop up box
    const[selectCoins,setSelectCoins] = useState(['','']); //Pair of selected coins to compare
    const[pairdata,setPairData] = useState([]); //raw data of selected coin pair from url

    const[dropdown_options,setDropdownOptions] = useState([]); // list of crypto coins
    const[dropdown_options2,setDropdownOptions2] = useState([]); // list of vs-currencies

    const[tabledata,setTableData] = useState(); // processed data in table
    const[pairdata1,setPairData1] = useState(); // table row 1: raw data of coin pair from url
    const[pairdata2,setPairData2] = useState(); // table row 2: raw data of coin pair from url
    const[pairdata3,setPairData3] = useState(); // table row 3: raw data of coin pair from url
    const[time,setTime] = useState([]);
    const[compareIsClicked,setIsClicked] = useState('false');
    const market_data_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=%271h%2C24h%27';
    const supported_currencies_url = 'https://api.coingecko.com/api/v3/simple/supported_vs_currencies';
  
    useEffect(() => {
        getApi()
    },[])

    async function getApi(){
        try{
           const response = await axios.get(market_data_url);
           const vsCurrResponse = await axios.get(supported_currencies_url); 
           setSelectCoinsList(response.data);
           setSelectVsCurrencies(vsCurrResponse.data);  
             
        }catch(error){
           console.error(error);
        }  
    }

    async function getPairData(vs_currency, coin_id,setData){
        try{
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/'+coin_id+'?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false');          
            let pair = {};
            pair[vs_currency] = response.data;
            setData(pair);     
          
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(pairdata1 && pairdata2 && pairdata3)
            buildTable(pairdata1,pairdata2,pairdata3); 
        const timer = setTimeout(() =>{
            setTime(time +1);
        },60000);
        return () => clearTimeout(timer);
    },[time]);

    /* Create first dropdown list */   
    useEffect(() =>{
        let options = [];
        selectCoinsList.map(element => (
            options.push(element.name)          
        ))
        setDropdownOptions(options);
    },[selectCoinsList])

  /* second dropdown list */   
    useEffect(() => {      
       let options2 = [];
       selectVsCurrencies.map(element =>(
           options2.push(element.toUpperCase())
       ))
       setDropdownOptions2(options2);
    },[selectVsCurrencies])
    
    function createRowData(key,data){
        let market = 'Not Available';
        let uppercase_key = key[0].toUpperCase();
        key[0] = key[0].toLowerCase();

        let time = data.market_data.last_updated.split('T');
        time = time[1].split('.');
        time = time[0].split(':');
        let UTC_to_PST = (parseInt(time[0]) - 7 ) +':' + time[1] + ':' + time[2];
        if(parseInt(time[0]) - 7 === 24)
           UTC_to_PST = '00:' + time[1] + ':'+ time[2];
        
        data.tickers.forEach(element => {
            if(element.target === uppercase_key){
                market = element.market.name;
            }
        })

        return {
            name: data.symbol.toUpperCase()+'/'+ uppercase_key,
            exchange: market,
            last: data.market_data.current_price[key],
            high: data.market_data.high_24h[key],
            low: data.market_data.low_24h[key],
            change: data.market_data.price_change_percentage_24h_in_currency[key]+'%',
            volume: data.market_data.total_volume[key],
            time: UTC_to_PST//time
        } 
    }
    /*Creates pair data for pop up box*/
    useEffect(() =>{            
        if(pairdata.length !== 0){           
            let key = Object.keys(pairdata);       
            let data = pairdata[key];
            let tablerow = createRowData(key,data);    
            setPopupdata([tablerow]);
      }   
    },[pairdata])

    function buildTable(pairdata1,pairdata2,pairdata3){
        if(pairdata1 && pairdata2 && pairdata3){
            if(pairdata1.length !== 0 && pairdata2 !== 0 && pairdata3 !== 0){
                let pair_data = [];
                pair_data.push(pairdata1);
                pair_data.push(pairdata2);
                pair_data.push(pairdata3);
          
                let table = [];
                for(let i = 0;i<pair_data.length;i++){
                    let key = Object.keys(pair_data[i]);                
                    let data = pair_data[i][key];    
                    let tablerow = createRowData(key,data);              
                    table.push(tablerow);
                }
                setTableData(table); 
            }  
        }
    }
    /*Creates pair data for initial table */
    useEffect(() =>{
        buildTable(pairdata1,pairdata2,pairdata3);  
    },[pairdata1,pairdata2,pairdata3])

  /* Creates initial table */
    useEffect(() => {      
        if(selectCoinsList.length !== 0 && selectVsCurrencies.length !== 0){
            getPairData(selectVsCurrencies[0],selectCoinsList[1].id,setPairData1);
            getPairData(selectVsCurrencies[1],selectCoinsList[2].id,setPairData2);
            getPairData(selectVsCurrencies[2],selectCoinsList[3].id,setPairData3);    
        }
    },[selectVsCurrencies,selectCoinsList])
 
    function handleCompare(e){
        e.preventDefault();
        if(selectCoins[0].length !== 0 && selectCoins[1].length !== 0){
           for( var i = 0; i < selectCoinsList.length; i++){
             if(selectCoins[0] === selectCoinsList[i].name){ 
                getPairData(selectCoins[1], selectCoinsList[i].id,setPairData); 
                setIsClicked('true');
                break;          
             }                           
           }           
        } 
    }
       
    useEffect(() => {
        if(popupData[0] !== 'Select a coin' 
        && popupData[1] !== 'Select a coin' 
        && popupData.length !== 0 
        && compareIsClicked === 'true'){
            setPopupBox('true');  
            setIsClicked('false');
        }
             
    },[popupData])

    function handleAddToTable(e){
        e.preventDefault();   
        if(tabledata[0].name !== popupData[0].name){
             let data = tabledata;
             data[2] = data[1];
             data[1] = data[0];
             data[0] = popupData[0];
             setTableData(Object.values(data));
        }
        setPopupBox('false');
    }

    function handleClose(e){  
        setPopupBox('false'); 
        e.preventDefault();
    }
   
    function getSelect1(e){
        let selection = selectCoins;
        selection[0] = e['value'];
        setSelectCoins(selection);
    }

    function getSelect2(e){
        let selection = selectCoins;
        selection[1] = e['value'];
        setSelectCoins(selection);
    }

    const columns = [{
        Header: 'Name',
        accessor: 'name'
    },{
        Header: 'Exchange',
        accessor: 'exchange'
    },{
        Header: 'Last',
        accessor: 'last'
    },{
        Header: 'High',
        accessor: 'high',
    },{
        Header: 'Low',
        accessor: 'low'
    },{
        Header: 'Change',
        accessor: 'change'
    },{
        Header: 'Vol.',
        accessor: 'volume'
    },{
        Header: 'Time',
        accessor: 'time'
    }]

    return (
        <div className="pairTable">
            <h3 className="crypto-pair-header">Crypto Pairs</h3>
            <ReactTable className="pair-table"
               data={tabledata}
               columns={columns}
               showPagination={false}
               defaultPageSize={3}              
            />
            <div >
                <fieldset>
                    <legend className="compare-coins-header">Compare Coins</legend>
                    <div className="select-compare-div">
                        <Dropdown className="dropdown" options={dropdown_options} onChange={getSelect1} value={'Select a coin'} placeholder="Select a coin" />
                        <Dropdown className="dropdown" options={dropdown_options2} onChange={getSelect2} value={'Select a coin'} placeholder="Select a coin" />
                        <button  value="Compare" onClick={handleCompare} className="compare-button">Compare</button>  
                    </div>
                </fieldset>  
            </div>
                {popupBox === 'true' && <CompareCoinsPopup content =
                {<div className="box-content">
                    <div className="popup-header-div">
                        <b id="popup-header">Comparing {selectCoins[0] }  vs. {selectCoins[1].toUpperCase()}</b>
                        <button value='button' onClick={handleClose} id="x-btn" >x</button>
                    </div>
                    <ReactTable className="popup-table"
                        data={popupData}
                        columns={columns}
                        pivotColumnWidth
                        showPagination={false}
                        defaultPageSize={1}                 
                    />                
                    <div className="popup-btn-div">
                        <button id="close-btn" onClick={handleClose}>Close</button>
                        <button id="add-to-table-btn" onClick={handleAddToTable}>Add to Table</button>
                    </div>
                </div>}
                handleClose={handleClose}
                />}
        </div>
    )
}