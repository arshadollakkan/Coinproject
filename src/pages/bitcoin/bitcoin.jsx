
import { useEffect, useState } from 'react';
import './bitcoin.css'
import { useParams } from 'react-router-dom';
import { Coincontext } from '../../context/coincontext';
import { useContext } from 'react';
import Linechart from '../../components/linechart/linechart';
const Bitcoin = () => {
    let {currency}=useContext(Coincontext)
    let[imagedata,setimagedata]=useState()
    let[hystoricdata,sethystoricdata]=useState()
    let {id}=useParams()
    let fetchdata=async()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-AcjXrrSYFHtGNrcTTVt9KUi4'
            }
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
            .then(response => response.json())
            .then(response => setimagedata(response))
            .catch(err => console.error(err));
    }
    let hystoricfetchdata=async()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-AcjXrrSYFHtGNrcTTVt9KUi4'
            }
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
            .then(response => response.json(),
        
        )
            .then(response => sethystoricdata(response))
            .catch(err => console.error(err));
    }

useEffect(()=>{fetchdata()
    hystoricfetchdata()
},[currency])
  if(imagedata && hystoricdata){
    return ( 
        <div className="img">
          <div className="imgfirst">
              <img src={imagedata.image.large} alt="" />
              <p>{imagedata.name}({imagedata.symbol.toUpperCase()})</p>
          </div>
         <div className="coinchart">
         <Linechart hystoricdata={hystoricdata}/>
         </div>
         <div className='list'>
          <ul>
            <li>Crypto market rank</li>
            <li>{imagedata.market_cap_rank}</li>
          </ul>
          <ul>
            <li>current price</li>
            <li>{currency.symbol}{imagedata.market_data.current_price[currency.name]}</li>
            
          </ul>
          <ul>
            <li>marketcap</li>
            <li>{currency.symbol}{imagedata.market_data.market_cap[currency.name]}</li>
          </ul>
          <ul>
            <li>24 hr high</li>
            <li>{currency.symbol}{imagedata.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24 hr low</li>
            <li>{currency.symbol}{imagedata.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
         </div>

        </div>
   );
  }
  else{
    return ( 
        <div className="spin">
         <div className='rot'></div>
        </div>
   );
  }
}
 
export default Bitcoin;

