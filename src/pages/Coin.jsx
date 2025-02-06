import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";


import { coinObject } from "../functions/convertObject"
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinPrices } from "../functions/getCoinPrices";
import { getCoinData } from "../functions/getCoinData";
import LineChart from "../components/Coin/LineChart";

import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";

import TogglePriceType from "../components/Coin/PriceType";
export default function Coin(){
    const { id } = useParams();

    console.log(id);
   
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [coinData, setCoinData] = useState();
    const [days, setDays] = useState(30);
    const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
    const [priceType, setPriceType] = useState('prices');

   

    useEffect(() => {
        if (id) {
            getData();
        }
    },[id]);
    async function getData(){
        setIsLoading(true);
        const data = await getCoinData(id,setError);
       
        if(data){
            coinObject(setCoinData, data);
            const prices = await getCoinPrices(id,days,priceType,setError);
            console.log(prices);
          
            if (prices.length > 0) {
                settingChartData(setChartData, prices)
                setIsLoading(false)
        }
    }
}
const handleDaysChange = async(event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id,event.target.value,priceType,setError);
  
    if (prices.length > 0) {
        settingChartData(setChartData, prices)
        console.log("ankit");
        setIsLoading(false)

  };  
}    
              
const handlePriceTypeChange = async(event) => {
    setIsLoading(true);
    setPriceType(event.target.value);
    const prices = await getCoinPrices(id,days,event.target.value,setError);
  
    if (prices.length > 0) {
        settingChartData(setChartData, prices)
       
        setIsLoading(false)


  };
}
 
    

   

    
    return(
        <>
        <Header />
        {!error && !isLoading ? (
           
            <>
            <div className="grey-wrapper">
            <List coin={coinData} />
            </div>
            <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>
            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                <LineChart  chartData={chartData} priceType={priceType}/>
            </div>
          <CoinInfo heading={coinData.name} description={coinData.description}/>
          </>
            ): error ? (
                    <div>
                      <h1 style={{ textAlign: "center" }}>
                        Sorry, Couldn't find the coin you're looking for 😞
                      </h1>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "2rem",
                        }}
                      >
                        <a href="/dashboard">
                          <Button text="Dashboard" />
                        </a>
                      </div>
                    </div>
            ):(
                
                    <Loader />
                  )}
                </>
            )
               
            
        }
       