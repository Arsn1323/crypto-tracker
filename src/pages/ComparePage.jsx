import React from 'react';
import Header from '../components/Common/Header'
import SelectCoins from '../components/Compare/SelectCoins'
import { useState, useEffect } from 'react';
import SelectDays from '../components/Coin/SelectDays';
import { getCoinData } from '../functions/getCoinData';
import { coinObject } from '../functions/convertObject';
import { settingChartData } from '../functions/settingChartData';
import { getCoinPrices } from '../functions/getCoinPrices';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import LineChart from '../components/Coin/LineChart';
import TogglePriceType from '../components/Coin/PriceType';
function ComparePage() {
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    const [crypto1Data, setCrypto1Data] = useState({});
    const [crypto2Data, setCrypto2Data] = useState({});
    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState("prices");
    const [isLoading, setIsLoading] = useState(false);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        setIsLoading(true);
        const data1 = await getCoinData(crypto1);
        const data2 = await getCoinData(crypto2);

        if (data1) {


            coinObject(setCrypto1Data, data1);
        }
        if (data2) {
            coinObject(setCrypto2Data, data2);
            const prices1 = await getCoinPrices(crypto1, days, priceType);
            const prices2 = await getCoinPrices(crypto2, days, priceType);
            settingChartData(setChartData, prices1, prices2);
            console.log("both price fetched:", prices1, prices2);
            setIsLoading(false);
        }

        //     if (data1 && data2) {
        //         // getPrices
        //         const prices1 = await getCoinPrices(crypto1, days, priceType);
        //         const prices2 = await getCoinPrices(crypto2, days, priceType);
        //         if(prices1.length >0 && prices2.length >0) {
        //             console.log("both price fetched",prices1, prices2);
                
        //         setIsLoading(false);
        //     }
        // }
    };

   async function handleDaysChange(event) {
        setDays(event.target.value);
        const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
        const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);

    }
    async function handlePriceTypeChange(event,newType){
        setIsLoading(true);
        setPriceType(newType);
        const prices1 = await getCoinPrices(crypto1, days, newType);
        const prices2 = await getCoinPrices(crypto2, days, newType);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);

    }

    const handleCoinChange = async (event, isCoin2) => {
        setIsLoading(true);
        if (isCoin2) {
            setCrypto2(event.target.value);
            const data = await getCoinData(event.target.value);
            coinObject(setCrypto2Data, data);


            // getPrices
            const prices1 = await getCoinPrices(crypto1, days, priceType);
            const prices2 = await getCoinPrices(crypto2, days, priceType);
            if (prices1.length > 0 && prices2.length > 0) {
                console.log("both price fetched", prices1, prices2);
                // settingChartData(setChartData, prices1, prices2);
                setIsLoading(false);


            }
        }
        else {
            setCrypto1(event.target.value);
            const data = await getCoinData(event.target.value);
            coinObject(setCrypto1Data, data);
           

        }


    };
    return (
        <div>

            <Header />
            {isLoading ? (
                <Loader />

            ) : (
                <>
                    <div className='coins-days-flex'>
                        <SelectCoins crypto1={crypto1} crypto2={crypto2}
                            setCrypto1={setCrypto1} setCrypto2={setCrypto2}
                            handleCoinChange={handleCoinChange} />
                        <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true} />
                    </div>
                    {/* <div className="grey-wrapper">
                        <List coin={crypto1Data} />
                    </div>
                    <div className="grey-wrapper">
                        <List coin={crypto2Data} />
                    </div> */}
                     <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                    <div className='grey-wrapper'>
                        <LineChart chartData={chartData} priceType={priceType} multiAxis={true}/>
                    </div>

                     <CoinInfo heading={crypto1Data.name} description={crypto1Data.description} />
                    <CoinInfo heading={crypto2Data.name} description={crypto2Data.description} /> 
                </>
            )
            }
        </div>


    )
}

export default ComparePage;
