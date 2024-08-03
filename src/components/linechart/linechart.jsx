import { useEffect, useState } from 'react';
import './linechart.css'
import Chart from 'react-google-charts';

const Linechart = ({hystoricdata}) => {

    let [data,setdata]=useState([["Date","prices"]])
    useEffect(()=>{
let copydata=[["Date","prices"]]
if(hystoricdata.prices){
    hystoricdata.prices.map((item)=>{
        copydata.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
    })
    setdata(copydata)} 
    },[hystoricdata])
    return ( 
        <div className='or'>
             
            
                <Chart chartType='LineChart' data={data}   legendToggler  />

            
            
             
        </div>
     );
}
 
export default Linechart;