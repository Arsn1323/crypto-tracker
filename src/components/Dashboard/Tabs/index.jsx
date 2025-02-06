import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import Grid from "../Grid"
import  "./Style.css";
import List from '../List';
export default function TabsComponent({coins}) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };
  const theme = createTheme({
    palette: {
        primary:{
            main:"#3a80e9",
        }
  },
})

  return (
    <ThemeProvider theme={theme}>
 <Box >
      <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
         
          </TabList>
        </Box>
        <TabPanel value="grid">
            <div className='grid-flex'>
                {coins.map((coin,index)=>{
                    return(
                      <>
                      <Grid coin={coin} key={index}/>
                      </>
                    )
                })}
            </div>
        </TabPanel>
        <TabPanel value="list">
            <div className='list-flex'>
        {coins.map((coin,i)=>{
                    return(
                      <>
                      <List coin={coin} key={i}/>
                      </>
                    )
                })}
                </div>
        </TabPanel>
       
      </TabContext>
    </Box>
    </ThemeProvider>
   
  );
}
