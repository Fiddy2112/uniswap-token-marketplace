import React, { useEffect, useRef, useState } from "react";
import {
  Plus,
  ClipboardCheckIcon,
  ClipboardIcon,
  TransactionStatus,
} from "@/components/index";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "@/utils/context";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import { numberFormat } from "@/utils/utils";

const SingleCard = ({ index, name, walletAddress }) => {
  const infinity = numberFormat(1000 / 0);
  const [balance, setBalance] = useState(infinity);
  const [tokenAddress, setTokenAddress] = useState();
  const [copyIcon, setCopyIcon] = useState(false);
  const [txPending, setTxPending] = useState(false);

  const noop = useRef();

  console.log(tokenAddress);

  const notifyError = (smg) => {
    return toast.error(smg, { duration: 6000 });
  };

  const notifySuccess = () => {
    return toast.success("Transaction Completed");
  };

  const fetchTokenBalance = async () => {
    const bal = await getTokenBalance(name, walletAddress);
    if (bal !== null && bal !== undefined) {
      const formatBal = await ethers.formatUnits(bal.toString(), 18);
      console.log("formatBal", formatBal);
      setBalance(formatBal.toString());
    }
  };

  const fetchTokenAddress = async () => {
    console.log("Name: ", name);
    const addr = await getTokenAddress(name);
    console.log("tokenAddress: ", addr);
    setTokenAddress(addr);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopyIcon(true);
    setTimeout(() => {
      setCopyIcon(false);
    }, 1500);
  };

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance();
      fetchTokenAddress();
    } else setBalance(infinity);
  }, [name, walletAddress]);

  return (
    <article className="flex flex-col bg-[#212429]">
      <a ref={noop} href="#" aria-label="img-balance">
        <img
          className="object-cover w-full h-62 bg-gray-500"
          src={`img/${index + 1}.png`}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a ref={noop} href="#" aria-label="lorem-balance"></a>
        <a
          ref={noop}
          href="#"
          className="text-xs uppercase hover:underline text-[#ffeaa7]"
        >
          {name} 10 M Supply
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-0">
          Get {name} token, limited supply available
        </h3>
        <div className="flex mx-2 pt-[10px]">
          <div className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg">
            <p className="text-sm">{name}</p>
            <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100">
              {balance}
            </p>
          </div>
          <div
            className="flex items p-2 px-2 bg-[#2c2f36] rounded-r-lg cursor-pointer"
            onClick={copyAddress}
          >
            {copyIcon ? <ClipboardCheckIcon /> : <ClipboardIcon />}
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleCard;
