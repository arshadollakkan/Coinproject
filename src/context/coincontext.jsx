import React, { useEffect, useState } from'react';

 export const Coincontext=React.createContext();
 //CG-AcjXrrSYFHtGNrcTTVt9KUi4

 const Coincontextprovider=(props)=>{
    let[allcoin,setcoin]=useState([])
    let[currency,setcurrency]=useState({
        name:"usd",
        symbol:"$",
    })
    let fetchdata=async()=>{

        const options = {
            method: 'GET',
            headers: {accept: 'application/json','x-cg-demo-api-key': 'CG-AcjXrrSYFHtGNrcTTVt9KUi4'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setcoin(response))
            .catch(err => console.error(err));
       
    }
    useEffect(()=>{
        fetchdata()
    },[currency])

    let gokul={ allcoin,setcurrency,currency}

        return(
    
    <Coincontext.Provider value={gokul}>
        {props.children}
    </Coincontext.Provider>)
 }
 export default Coincontextprovider;