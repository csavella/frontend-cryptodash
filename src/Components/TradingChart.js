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
        },60000);
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

        if(newdate.length === 0)
            hour = split_time[0];    
        
        let new_time = hour + ':' + split_time[1];
        newdate = split_date[1] + ' ' + split_date[2] + ' ('+ new_time + ')';

        hour++;
        if(hour === 24){
            hour = '00';
            day--;
        }
        if(hour < 10 && hour !== '00'){
          hour = '0'+hour;
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
            for(let i = 0; i <length; i++){
                date = getFormattedDate(date.hour,date.day,date.newdate);            
                dates_7d.push(date.newdate);               
            }
             
            dates_7d = dates_7d.slice(length - 160);               
            dates_24h = dates_7d.slice(length-31);
            console.log('24h '+dates_24h.length)
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
            yAxisID: 'A',
            label: (Object.keys(chartdata)[0]),          
            data: (Object.values(chartdata)[0]),
            fill: false,
            backgroundColor: 'rgb(250, 169, 0)',
            borderColor: 'rgba(77, 77, 78,0.2)',
          },
          {
            yAxisID: 'B',
            label: (Object.keys(chartdata)[1]),            
            data: (Object.values(chartdata)[1]),
            fill: false,
            backgroundColor: 'rgb(55, 54, 123)',
            borderColor: 'rgba(201, 157, 102,0.2)',
          },
          {
            yAxisID: 'C',
            label: (Object.keys(chartdata)[4]),            
            data: (Object.values(chartdata)[4]),
            fill: false,
            backgroundColor: 'rgb(193, 9, 97)',
            borderColor: 'rgba(48, 55, 54,0.2)',
          },
          {
            yAxisID: 'D',
            label: (Object.keys(chartdata)[3]),
            data: (Object.values(chartdata)[3]),
            fill: false,
            backgroundColor: 'rgb(42, 113, 208)',
            borderColor: 'rgba(0,0,0,0.2)',
          },
          {
            yAxisID: 'E',
            label: (Object.keys(chartdata)[2]),
            data: (Object.values(chartdata)[2]),
            fill: false,
            backgroundColor: 'rgb(80,175,149)',
            borderColor: 'rgba(92,91,94,0.2)',
          },
        ],
      };
      
  const options = {
    responsive: true,
    scales: {
      x:{
        type: 'category',     
        ticks:{
            autoSkip:true,   
            callback:function(value, index){
                let date = this.getLabelForValue(value);
                let date_2 = this.getLabelForValue(value-4);
                let date2 = date_2.toString().split(' ')[1];
                let date1 = date.split(' ')[1];

                if( index%4 === 0 &&  date1 !== date2 ){
                  return date;
                }else if(index === 0 || index === 167|| index === 23){
                  return date;
                }
                else{
                  return date.split(' ')[2];
                }
            }                         
        }
      },
      yAxes: [{
          type: 'logarithmic',
          ticks: {
            id: 'A',
            min: 0.5,
            max: 50000,        
          }                   
    },{
      type: 'logarithmic',
      ticks: {
        id: 'B',
        min:0.5,
        max: 5000,     
      }
    },{
        type: 'logarithmic',
        ticks: {
          id: 'C',
          min:0.5,
          max: 1000,        
        }
      }, {
          type: 'logarithmic',
          ticks: {
            id: 'D',
            min:0.5,
            max: 500,          
          }
        },{
          type: 'logarithmic',
          ticks: {
            id: 'E',
            min:0,
            max: 50,   
          } 
       }
    ]}
  };

  return(
    <div className="trading-chart" style={{height:"400px",width:"80vw",marginLeft:"auto",marginRight:"auto",marginTop:"50px"}}>
      <div className='header'>
        <h1 className='title' style={{fontSize:"25px", fontFamily:"sans-serif"}}>Cryptocurrency Trading Rates</h1>
        <button style={{borderRadius:'5px',backgroundColor: 'gray',color: 'white',hover: 'lightgray'}} onClick={handle24h}>24h</button>
        <button style={{borderRadius:'5px',backgroundColor: 'gray',color: 'white'}} onClick={handle7d}>7d</button>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
