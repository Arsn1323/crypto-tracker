import * as React from 'react';
import {useState} from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./style.css"
export default function TogglePriceType({priceType,handlePriceTypeChange}) {
  
  
  return (
    <div className="toggle-prices">
    <ToggleButtonGroup
    sx={{
        "&.Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--blue)!important",
          borderColor: "unset",
          color: "var(--blue) !important ",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue) !important",
        },
      }}
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      aria-label="text alignment"
    >
      <ToggleButton value="prices" aria-label="left aligned">
       Price
      </ToggleButton>
      <ToggleButton value="market_caps" aria-label="centered">
       MarketCap
      </ToggleButton>
      <ToggleButton value="total_volumes" aria-label="right aligned">
       Total Volume
      </ToggleButton>
      
       
    
    </ToggleButtonGroup>
    </div>
  );
}