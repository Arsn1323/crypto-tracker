import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';

import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/pagination';
import Loader from '../components/Common/Loader';
import TopButton from '../components/Common/BackToTop';
import { getting100Coins } from '../functions/getting100Coins';

function DashboardPage() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);


    const handleChange = (e) => {
        setSearch(e.target.value);
        
    };
    var filteredCoins = coins.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        // Get 100 Coins
        getData();
    }, []);

    const getData =async () => {
      
        const myCoins =await getting100Coins();
        if(myCoins){
            setCoins(myCoins);
            setPaginatedCoins(myCoins.slice(0, 10));
            setLoading(false);
        }
       
       
    };

    const handlePageChange = (event, value) => {
        setPage(value);
        // Value = new page number
        var initialCount = (value - 1) * 10;
        setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
    };

    return (
        <>
            <Header />
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Search handleChange={handleChange} />
                    <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
                    {!search && (
                        <PaginationComponent
                            page={page}
                            handleChange={handlePageChange}
                        />
                    )}
                </>
            )}
             <TopButton/>
        </>
        
    )
}


export default DashboardPage;
