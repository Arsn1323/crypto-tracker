import React from 'react'
import "./style.css";
import  { useState } from "react";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchList";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
function Grid({ coin }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

    return (
        <Link to={`/coin/${coin.id}`}>
          <div className='grid'>
            <div className="img-flex">
                <img src={coin.image} className="coin-image" />
                <div className="info-flex">
                    <p className="coin-symbol">{coin.symbol}</p>
                    <p className="coin-name">{coin.name}</p>
                </div>
                <div
              className={`watchlist-icon ${
                coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
              }`}
              onClick={(e) => {
                if (isCoinAdded) {
                  // remove coin

                  removeItemToWatchlist(e, coin.id, setIsCoinAdded);
                } else {
                  setIsCoinAdded(true);
                  saveItemToWatchlist(e, coin.id);
                }
              }}
            >
              {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
            </div>
            </div>
            {coin.price_change_percentage_24h >= 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="chip-icon">
              <TrendingUpIcon/>
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="chip-icon red">
              <TrendingDownIcon />
            </div>
          </div>
        )}
         {coin.price_change_percentage_24h >= 0 ? (
          <p className="current-price">
            ${coin.current_price.toLocaleString()}
          </p>
        ) : (
          <p className="current-price-red">
            ${coin.current_price.toLocaleString()}
          </p>
        )}
        <p className="coin-name">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="coin-name">
          Market Capital : ${coin.market_cap.toLocaleString()}
        </p>
        </div>
        </Link>
    )
}

export default Grid;
