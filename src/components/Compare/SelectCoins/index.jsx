import React from 'react'
import { getting100Coins } from '../../../functions/getting100Coins';
import { useState, useEffect } from "react";
import MenuItem from '@mui/material/MenuItem';
import "./style.css"
import Select from '@mui/material/Select';

function SelectCoins({ crypto1, crypto2, setCrypto1, setCrypto2, handleCoinChange }) {
  //id state

  const [allCoins, setAllCoins] = useState([]);



  useEffect(() => {
    // Get 100 Coins
    getData();
  }, []);
  async function getData() {
    const myCoins = await getting100Coins();
    setAllCoins(myCoins);
  }

  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  }
  return (
    <div className='coins-flex'>
      <p>Crypto 1</p>
      <Select
        sx={style}

        value={crypto1}
        label="Crypto"
        onChange={(event) => handleCoinChange(event, false)}
      >
        {allCoins
        .filter((item)=> item.id != crypto2)
        .map((coin, i) => (
          <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
        ))}

      </Select>
      <p>Crypto 2</p>
      <Select
        sx={style}

        value={crypto2}
        label="Crypto2"
        onChange={(event) => handleCoinChange(event, true)}
      >
        {allCoins
         .filter((item)=> item.id != crypto1)
        .map((coin,index) => (
          <MenuItem  key={index} value={coin.id}>{coin.name}</MenuItem>
        ))}

      </Select>
    </div>
  )
}

export default SelectCoins
