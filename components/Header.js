import React, { useState, useEffect, useRef } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import toast, { Toaster } from "react-hot-toast";

// internal import
import { TokenBalance, Logo, Menu } from "./index";

const Header = () => {
  const [tokenBalanceComp, setTokenBalanceComp] = useState();
  const { address } = useAccount();

  const noreferrer = useRef();

  const notifyConnectWallet = () => {
    toast.error("Connect Wallet", { duration: 2000 });
  };

  useEffect(() => {
    setTokenBalanceComp(
      <>
        <TokenBalance name={"USD Coin"} walletAddress={address} />
        <TokenBalance name={"BNB"} walletAddress={address} />
        <TokenBalance name={"SHIBA INU"} walletAddress={address} />
      </>
    );
    if (!address) notifyConnectWallet();
  }, [address]);
  return (
    <header className="p-4 text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <a
            className="flex items-center p-2"
            ref={noreferrer}
            href="#"
            aria-label="Back to homepage"
          >
            <Logo />
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                className="flex items-center px-4 -mb-1 dark:border-transparent text-[#ffeaa7] border-[#ffeaa7]"
                ref={noreferrer}
                href="/"
              >
                Swap
              </a>
            </li>
            <li className="flex">
              <a
                className="flex items-center px-4 -mb-1 dark:border-transparent"
                ref={noreferrer}
                href="/tokens"
              >
                Tokens
              </a>
            </li>

            <li className="flex">
              <a
                className="flex items-center px-4 -mb-1 dark:border-transparent"
                ref={noreferrer}
                href="#"
              >
                NFTs
              </a>
            </li>

            <li className="flex">
              <a
                className="flex items-center px-4 -mb-1 dark:border-transparent"
                ref={noreferrer}
                href="#"
              >
                Pool
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:flex items-center flex-shrink-0 hidden">
          <TokenBalance name={"USD Coin"} walletAddress={address} />
          <TokenBalance name={"SHIBA INU"} walletAddress={address} />
          <ConnectButton />
        </div>
        <button className="lg:hidden p-4">
          <Menu />
        </button>
      </div>
      <Toaster />
    </header>
  );
};

export default Header;
