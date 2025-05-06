import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";

const Table = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoins, setDisplayCoins] = useState([]);
  return <div>Table</div>;
};

export default Table;
