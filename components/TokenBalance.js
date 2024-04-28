import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";

import { ClipboardCheckIcon, ClipboardIcon } from "./index";

// Internal import
import TransactionStatus from "./TransactionStatus";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "@/utils/context";
import { numberFormat } from "@/utils/utils";

function TokenBalance({ name, walletAddress }) {
  const infinity = 1000 / 0;
  const [balance, setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState();
  const [copyIcon, setCopyIcon] = useState(false);
  const [txPending, setTxPending] = useState();

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = (msg) => toast.success("Transaction completed");

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance();
      fetchTokenAddress();
    } else setBalance(`${numberFormat(infinity)}`);
  }, [name, walletAddress]);

  const copyAddress = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopyIcon(true);
    setTimeout(() => {
      setCopyIcon(false);
    }, 1000);
  };

  const fetchTokenBalance = async () => {
    const bal = await getTokenBalance(name, walletAddress);
    console.log(bal);
    if (bal !== null && bal !== undefined) {
      const fbal = ethers.formatUnits(bal.toString(), 18);
      setBalance(fbal.toString());
    }
  };

  const fetchTokenAddress = async () => {
    const address = await getTokenAddress(name);
    setTokenAddress(address);
    console.log(address);
  };

  return (
    <div className="flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#2c3e50]">
      <div className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg">
        <p className="text-sm">{name}</p>
        <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100">
          {balance}
        </p>
      </div>

      <div
        className="flex items-center p-2 px-2 bg-[#2c3e50] rounded-r-lg"
        onClick={copyAddress}
      >
        {copyIcon ? (
          <ClipboardCheckIcon className="h-6 cursor-pointer" />
        ) : (
          <ClipboardIcon className="h-6 cursor-pointer" />
        )}
      </div>
      {txPending && <TransactionStatus />}
      <Toaster />
    </div>
  );
}

export default TokenBalance;
