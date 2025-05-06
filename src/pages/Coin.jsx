import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";

const Coin = () => {
  const { coinId } = useParams();
  const { allCoins } = useContext(CoinContext);
  const coinData = allCoins.find((coin) => coin.id === coinId);
  console.log(coinData);
  return (
    <div className="flex items-center justify-center flex-col gap-4 p-20">
      <img className="animate-pulse" src={coinData.image} alt="" />
      <p className="text-5xl ">{coinData.name}</p>
      <p className="text-2xl m-5">N{coinData.current_price.toLocaleString()}</p>
      <p>{coinData.price_change_24h.toLocaleString()}</p>
      <p
        className={
          coinData.price_change_percentage_24h < 0
            ? "text-red-700"
            : "text-green-700"
        }
      >
        {coinData.price_change_percentage_24h}
      </p>
      {/* <Text color={price < 0 ? "red" : "green"}>
        ${Math.abs(price).toFixed(2)}
      </Text> */}

      <p>{coinData.atl_date}</p>
    </div>
  );
};

export default Coin;
