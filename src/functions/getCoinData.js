import axios from "axios";

export const getCoinData = (id) => {
  const myData= axios
    .get(` https://api.coingecko.com/api/v3/coins/${id} `)
    .then((response) => {
      
        return response.data;
      
    })
    .catch((e) => {
      console.log(e.message);
      // if (setError) {
      //   setError(true);
      // }
    });

  return myData;
};