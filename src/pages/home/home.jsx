import './home.css'
import { Coincontext } from '../../context/coincontext';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  let {currency,allcoin}=useContext(Coincontext)
  let[coindata,setcoindata]=useState([])
  let[data,setdata]=useState('')

  useEffect(()=>{
    setcoindata(allcoin)
  },[allcoin])

  let handle=(e)=>{
    setdata(e.target.value)
    if(e.target.value===""){
      setcoindata(allcoin)
    }


} 
 let don=async(e)=>{
    e.preventDefault()
    let dataone=await allcoin.filter((x)=>{
     return x.name.toLowerCase().includes(data.toLowerCase())
    })
    setcoindata(dataone) 
  }


    return (
        <div className='home'>
          <div className='top'>
            <h1>Largest
            <br />
            Crpto market place
            </h1>
            <p>Welcome to the world's largest cryptocurrency marketpalce.
              sign up to explore more about cryptos
            </p>
            <form action="" onSubmit={don}>
              <input type="text" placeholder='Search crypto..' list='we' value={data}  onChange={handle} />
<datalist id='we'>
{
  allcoin.map((item,id)=>(
    <option key={id} value={item.name} />
  ))
}
</datalist>
              <button>SEARCH</button>
            </form>

          </div>
          <div className="middle">
            <div className='layout'>
              <p>#</p>
              <p>Coins</p>
              <p>Price</p> 
              <p>24 hr cahnge</p>
              <p>Market cap</p>
            </div>
            {
              coindata.slice(0,12).map((item,index)=>(
            <Link to={`/bitcoin/${item.id}`}>
              <div className='layout' key={index}>
                <p>{item.market_cap_rank}</p>
                <div>
                  <img style={{width:"50px"}} src={item.image} alt="" />
                  <p>{item.name+""}-{""+item.symbol}</p>
                </div>
              <p>{currency.symbol}{item.current_price.toLocaleString()/* to make comma*/}</p>
              <p className={item.price_change_percentage_24h>0?'green':'red'}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
              <p>{item.market_cap.toLocaleString()}</p>
              </div>
            </Link>
              ))
            }
            
          </div>
         
        </div>
      );
}
 
export default Home;