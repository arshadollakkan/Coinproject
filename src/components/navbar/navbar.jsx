import './navbar.css';
import logo from '../../assets/logo.png';
import arrow from '../../assets/arrow.png';

import { useContext } from 'react';
import { Coincontext } from '../../context/coincontext';
import { Link } from 'react-router-dom';

const Navbar = () => {
   let {setcurrency}=useContext(Coincontext)

   let asd=(e)=>{
      switch (e.target.value) {
         case "usd":{setcurrency({name:"usd",symbol:"$"})
         break;}
         case "eur":{setcurrency({name:"eur",symbol:"€"})
         break;}
         case "inr":{setcurrency({name:"inr",symbol:"₹"})
         break;}
            
            
      
         default:{setcurrency({name:"usd",symbol:"$"})
            break;}
      }
   }

  
    return ( 
        <div className="navbar">
        <Link to='/'> <img className='op' src={logo} alt="" /></Link>
         <ul><Link to='/'><li>Home</li></Link>
         <li>Features</li>
         <li>Prising</li>
         <li>Blog</li></ul>
         <div className='butt'>
            <select name="" id=""  onChange={asd}>
               <option value="usd">USD</option>
               <option value="eur">EUR</option>
               <option value="inr">INR</option>
            </select>
            <button>Signup <img src={arrow} alt="" /></button>
         </div>
        </div>
     );
}
 
export default Navbar;