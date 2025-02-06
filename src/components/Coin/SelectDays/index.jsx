import * as React from 'react';
import {useState} from "react";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import "./style.css"
import Select from '@mui/material/Select';

export default function SelectDays({ days, handleDaysChange,noPTag}) {
//   const [days, setDays] = useState('');



  return (
   <div className='select-days'>
    {!noPTag && <p>Price Change In</p>}
     
        <InputLabel id="demo-simple-select-label">Days</InputLabel>
        <Select
         sx={{
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
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={10}>10 days</MenuItem>
          <MenuItem value={20}>20 days</MenuItem>
          <MenuItem value={30}>30 days</MenuItem>
          <MenuItem value={1}>1 year</MenuItem>
        </Select>
     
      </div>
  );
}