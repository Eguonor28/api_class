import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";

const Table = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoins, setDisplayCoins] = useState([]);

  useEffect(() => {
    setDisplayCoins(allCoins);
  }, [allCoins]);
  console.log(displayCoins);
  return (
    <div className="bg-gray-950 rounded-2xl max-w7xl mx-auto">
      Table
      <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] px-5 py-4 text-sm border-b border-gray-700">
        <p>No</p>
        <p>Coins</p>
        <p>Price</p>
        <p>24H Change</p>
        <p className="hidden sm:block">Market Cap</p>
      </div>
      <div className="div">
        {displayCoins.slice(0, 100).map((item, index) => (
          <Link
            className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] px-5 py-4 text-sm border-b border-gray-700 hover:bg-gray-900 transition"
            to={`coin/${item.id}`}
            key={index}
          >
            <p>{item.market_cap_rank}</p>
            <div className="flex items-center gap-2">
              <img src={item.image} alt="" className="w-9" />
              <p>
                {item.name} - {item.symbol}
              </p>
            </div>
            <p>N{item.current_price.toLocaleString()}</p>
            <p
              className={
                item.price_change_percentage_24h < 0
                  ? "text-red-700"
                  : "text-green-700"
              }
            >
              {item.price_change_percentage_24h}
            </p>
            <p>{item.market_cap.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Table;
