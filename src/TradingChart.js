import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';


export default function LineChart (){
    const axios = require('axios').default;  
    const[coindata,setCoindata] = useState([]);
    const[time,setTime] = useState([]);

    const[chartdata,setChartData] = useState([]);
    const[chartdates,setChartDates] = useState([]);
    const[data7d,setData7d] = useState([]);
    const[dates7d,setDates7d] = useState([]);
    const[data24h,setData24h] = useState([]);
    const[dates24h,setDates24h] = useState([]);

    const FiveCoinsDataURL = ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbinancecoin%2Ctether%2Ccardano&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=%271h%2C24h%27');
  
    useEffect(() => {
        getCoinData();
        const timer = setTimeout(() =>{
            setTime(time +1);
        },600000);
        return () => clearTimeout(timer);
    },[time]);
    
    
    async function getCoinData(){
       try{
           const response = await axios.get(FiveCoinsDataURL); 
           setCoindata(response.data);     
       }catch(error){
           console.log(error);
       }
    }

    useEffect(()=>{
        let sparklines7d = {};
        let sparklines24h = {};

        coindata.forEach((element) => {
            sparklines7d[element.name] = element.sparkline_in_7d.price;
            let length = sparklines7d[element.name].length;
            sparklines24h[element.name] = [24];
            sparklines24h[element.name] = sparklines7d[element.name].slice(length-24);           
        });
        setData24h(sparklines24h);
        setData7d(sparklines7d);

    },[coindata])

    function getFormattedDate(hour, day, newdate){
        
        let date = new Date();
        date.setDate(date.getDate() - day);
        let split_date = date.toString().split(" ");
        let split_time = split_date[4].toString().split(':');
        let min_sec = split_time[1] + ':' + split_time[2];  

        if(newdate.length === 0)
            hour = split_time[0];    
        
        let new_time = hour + ':' + min_sec;
        newdate = split_date[1] + ' ' + split_date[2] + ' ('+ new_time + ')';
        hour++;
        if(hour === 24){
            hour = '00';
            day--;
        }
        return {hour,day,newdate};
    }

    useEffect(()=>{
        let dates_7d =[''];
        let dates_24h = [''];

        if(data7d.length !== 0){
            let date = {
                hour:0,
                day:7,
                newdate:''
            }
        
            let length;
            if(Object.values(data7d)[0])
                length = (Object.values(data7d)[0].length);
            
            date = getFormattedDate(date.hour,date.day,date.newdate);

            for(let i = 0; i < length; i++){
                date = getFormattedDate(date.hour,date.day,date.newdate);
                dates_7d.push(date.newdate);
            }
            dates_24h = dates_7d.slice(length-23);
           
            setDates24h(dates_24h);
            setDates7d(dates_7d);
            setChartDates(dates_7d);
            setChartData(data7d);

        }
    },[data7d])

    function handle24h(){
        setChartData(data24h);
        setChartDates(dates24h);
    }
    function handle7d(){
        setChartData(data7d);
        setChartDates(dates7d);
    }
    const data = {
        labels: Object.values(chartdates),
        datasets: [
          {
            label: (Object.keys(chartdata)[0]),
            data: (Object.values(chartdata)[0]),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: (Object.keys(chartdata)[1]),
            data: (Object.values(chartdata)[1]),
            fill: false,
            backgroundColor: 'rgb(200, 99, 100)',
            borderColor: 'rgba(200, 99, 132, 0.2)',
          },
          {
            label: (Object.keys(chartdata)[4]),
            data: (Object.values(chartdata)[4]),
            fill: false,
            backgroundColor: 'rgb(155, 199, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: (Object.keys(chartdata)[3]),
            data: (Object.values(chartdata)[3]),
            fill: false,
            backgroundColor: 'rgb(255, 99, 32)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: (Object.keys(chartdata)[2]),
            data: (Object.values(chartdata)[2]),
            fill: false,
            backgroundColor: 'rgb(55, 99, 232)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };
      
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          stacked: true
        },
      ],
    },
  };
  return(
    <div>
      <div className='header'>
        <h1 className='title'>Cryptocurrency Trading Rates</h1>
        <button onClick={handle24h}>24h</button>
        <button onClick={handle7d}>7d</button>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
