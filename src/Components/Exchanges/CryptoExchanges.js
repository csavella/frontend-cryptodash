import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import './CryptoExchanges.css';

export default function ExchangesTable(){

    const[exchangedata,setExchangedata] = useState([]);
    const[data,setData] = useState([]);
   
    const exchangeurl = ('https://api.coingecko.com/api/v3/exchanges');

    useEffect(() => {
        getExchanges();
    }, [])

    async function getExchanges(){
        try{
            const response = await axios.get(exchangeurl);
            setExchangedata(response.data);
        }catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {
        if(exchangedata){
            let data = [];        
            for( let index in exchangedata){
                data[index] = {
                    logo: exchangedata[index].image,
                    name: exchangedata[index].name,
                    site: exchangedata[index].url
                }
            }
         setData(data); }
    },[exchangedata]) 

    const columns = [{
        
        Header: 'Logo ',
        accessor: 'logo',
        Cell: ({ value } ) => (
           <img
             src={value}
             alt={''}
           />
         ),
         width: 65                   
    },{
        Header: 'Name',
        accessor: 'name',
        Cell:({value}) =>(
           <div style={{textAlign: 'center'}}>
               {value}
           </div>
        )
    },{
        Header: 'Website',
        accessor: 'site',
        Cell:({value}) =>(   
           <div style={{textAlign: 'center'}}>   
               <a href={value} >
                   {value}
               </a>
           </div>
        )
    }]

    return(
        <div>
            <ReactTable
               data={data}
               columns={columns}
               showPagination={true}
               defaultPageSize={10}
            />         
        </div>
    )
    
}
