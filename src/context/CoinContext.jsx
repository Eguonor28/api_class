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
const contextValue = 0;
const CoinProvider = (props) => {
  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinProvider;
