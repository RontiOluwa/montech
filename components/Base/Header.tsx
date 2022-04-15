import React, { useState, useEffect } from "react";
import {
  getCurrentWalletConnected,
  disconnectMetamask,
} from "../../utils/interact";
// import { WalletAddress } from "../../interface/Interface";
import { useRouter } from "next/router";

export default function Header() {
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState("0");

  const router = useRouter();

  useEffect(() => {
    getWallet();
  });

  const getWallet = async () => {
    const wallet: any = await getCurrentWalletConnected();
    setWallet(wallet.address);
    setBalance(wallet.balance);
  };

  const disConnect = async () => {
    await disconnectMetamask();
  };

  return (
    // border-b-gray-50 border-b p-2
    <div className="w-11/12 m-auto p-inherit pt-4 block sm:px-0 md:flex ">
      <div className="w-2/4 ">
        {router.pathname == "/joined" || router.pathname == "/spectating" ? (
          <img src="/logoLight.svg" width={150} height={50} />
        ) : (
          <img src="/logo.svg" width={150} height={50} />
        )}
      </div>
      {wallet !== "" ? (
        <div
          className="w-full text-center md:w-2/4 md:text-right mt-5 md:mt-0"
          onClick={() => disConnect()}
        >
          <button className="light-blue-bg p-4 text-white font-bold rounded-l-lg">
            {balance} ETH
          </button>
          <button
            className={`${
              router.pathname === "/joined" || router.pathname == "/spectating"
                ? "dark-light-bg text-white"
                : "bg-white"
            } p-4 font-bold rounded-r-lg`}
          >
            {String(wallet).substring(0, 6) +
              "..." +
              String(wallet).substring(38)}
          </button>
        </div>
      ) : null}
    </div>
  );
}
