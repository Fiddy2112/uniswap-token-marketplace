import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAccount } from "wagmi";
import {
  Plus,
  ClipboardCheckIcon,
  ClipboardIcon,
  SingleCard,
  TransactionStatus,
} from "@/components/index";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "@/utils/context";

Toaster;
const Card = () => {
  const account = useAccount();
  return (
    <section className="py-6 sm-py-12 bg-[#1A1A1A] text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">All Listed Token For Sale</h2>
          <p className="font-sans text-sm text-gray-100">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <SingleCard index={0} name={"Tether USD"} walletAddress={account} />
          <SingleCard index={1} name={"BNB"} walletAddress={account} />
          <SingleCard index={2} name={"USD Coin"} walletAddress={account} />
          <SingleCard index={3} name={"stEth"} walletAddress={account} />
          <SingleCard index={4} name={"Tron"} walletAddress={account} />
          <SingleCard index={5} name={"Matic Token"} walletAddress={account} />
          <SingleCard index={6} name={"SHIBA INU"} walletAddress={account} />
          <SingleCard index={7} name={"Uniswap"} walletAddress={account} />
        </div>
      </div>
    </section>
  );
};

export default Card;
