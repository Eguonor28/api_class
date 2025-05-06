//imports
//create the context
//the provider component
//state management
//fetch data from coingecko API
//Side effect: useEffect
//context value & return
//exporting
import React, { createContext, useEffect, useState } from "react";
export const CoinContext = createContext();

const CoinProvider = (props) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrrency] = useState({ name: "ngn", symbol: "N" });

  const fetchAllCoins = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-q5ya9MNFEjHMgt8LwuFNb87v",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((json) => {
        setAllCoins(json);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCoins();
  }, [currency]);

  const contextValue = {
    allCoins,
    currency,
    setCurrrency,
  };
  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinProvider;
