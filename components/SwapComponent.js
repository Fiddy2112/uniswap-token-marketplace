import React, { useEffect, useState, useRef } from "react";
import {
  hasValidAllowance,
  increaseAllowance,
  swapTokenToEth,
  swapEthToToken,
  swapTokenToToken,
} from "@/utils/context";
import SwapField from "./SwapField";
import TransactionStatus from "./TransactionStatus";
import toast, { Toaster } from "react-hot-toast";
import { toEth, toWei } from "@/utils/utils";
import { DEFAULT_VALUE, Eth } from "@/utils/saleToken";
import { useAccount } from "wagmi";
import { Cog, ArrowDown, ArrowUp } from "./index";

const SwapComponent = () => {
  const [srcToken, setSrcToken] = useState(Eth);
  const [destToken, setDestToken] = useState(DEFAULT_VALUE);

  const [inputValue, setInputValue] = useState();
  const [outputValue, setOutputValue] = useState();

  const inputValueRef = useRef();
  const outputValueRef = useRef();

  const isReversed = useRef(false);

  console.log(isReversed.current);

  const [currentRef, setCurrentRef] = useState(isReversed.current);

  const INCREASE_ALLOWANCE = "Increase allowance";
  const ENTER_AMOUNT = "Enter an amount";
  const CONNECT_WALLET = "Connect wallet";
  const SWAP = "Swap";

  const srcTokenObj = {
    id: "srcToken",
    value: inputValue,
    setValue: setInputValue,
    defaultValue: srcToken,
    ignoreValue: destToken,
    setToken: setSrcToken,
  };

  const destTokenObj = {
    id: "destToken",
    value: outputValue,
    setValue: setOutputValue,
    defaultValue: destToken,
    ignoreValue: srcToken,
    setToken: setDestToken,
  };

  const [srcTokenComp, setSrcTokenComp] = useState();
  const [destTokenComp, setDestTokenComp] = useState();

  const [swapBtnText, setSwapBtnText] = useState(ENTER_AMOUNT);
  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction completed.");

  const account = useAccount();

  useEffect(() => {
    //handling the text of the submit button
    if (!account) setSwapBtnText(CONNECT_WALLET);
    else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);
    else setSwapBtnText(SWAP);
  }, [inputValue, outputValue, account]);

  useEffect(() => {
    if (
      document.activeElement !== outputValueRef.current &&
      document.activeElement.ariaLabel !== "srcToken" &&
      !isReversed.current
    ) {
      populateOutputValue(inputValue);

      setSrcTokenComp(<SwapField obj={srcTokenObj} ref={inputValueRef} />);

      if (inputValue?.length === 0) setOutputValue("");
    }
  }, [inputValue, destToken]);

  useEffect(() => {
    if (
      document.activeElement !== inputValueRef.current &&
      document.activeElement.ariaLabel !== "destToken" &&
      !isReversed.current
    ) {
      populateInputValue(outputValue);

      setDestTokenComp(<SwapField obj={destTokenObj} ref={outputValueRef} />);

      if (outputValue?.length === 0) setInputValue("");

      // Resetting the isReversed value if its set
      if (isReversed.current) isReversed.current = false;
    }
  }, [outputValue, srcToken]);

  const handleReverseExchange = (e) => {
    // settings the isReversed value to prevent the input/output values
    // being calculated in their respective side - effects
    // isReversed.current = true;

    isReversed.current = !isReversed.current;
    setCurrentRef(isReversed.current);

    // swap token (srcToken <=> destToken)
    // swap value (inputValue <=> outputValue)
    setInputValue(outputValue);
    setOutputValue(inputValue);

    setSrcToken(destToken);
    setDestToken(srcToken);
  };

  const getSwapBtnClassName = () => {
    let className = "p-4 w-full my-2 rounded-xl";
    className +=
      swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET
        ? " text-zinc-400 bg-zinc-800 pointer-events-none"
        : " bg-blue-700";
    className += swapBtnText === INCREASE_ALLOWANCE ? " bg-yellow-600" : "";
    return className;
  };

  const populateOutputValue = async (inputValue) => {
    if (
      destToken === DEFAULT_VALUE ||
      srcToken === DEFAULT_VALUE ||
      !inputValue
    )
      return;
    try {
      if (srcToken !== Eth && destToken !== Eth) setOutputValue(inputValue);
      else if (srcToken === Eth && destToken !== Eth) {
        const value = toEth(toWei(inputValue), 14);
        setOutputValue(value);
      } else if (srcToken !== Eth && destToken === Eth) {
        const value = toEth(toWei(inputValue), 14);
        setOutputValue(value);
      }
    } catch (err) {
      setOutputValue("");

      console.log(err);
    }
  };

  const populateInputValue = async (outputValue) => {
    if (
      destToken === DEFAULT_VALUE ||
      srcToken === DEFAULT_VALUE ||
      !outputValue
    )
      return;
    try {
      if (srcToken !== Eth && destToken !== Eth) setInputValue(outputValue);
      else if (srcToken === Eth && destToken !== Eth) {
        const value = toEth(toWei(outputValue), 14);
        setInputValue(value);
      } else if (srcToken !== Eth && destToken === Eth) {
        const value = toEth(toWei(outputValue), 14);
        setInputValue(value);
      }
    } catch (err) {
      setInputValue("0");
      console.log(err);
    }
  };

  const handleIncreaseAllowance = async () => {
    // increase the allowance
    setTxPending(true);
    await increaseAllowance(srcToken, inputValue);
    setTxPending(false);

    //set swapbtn to 'swap' again
    setSwapBtnText(SWAP);
  };

  const performSwap = async () => {
    setTxPending(true);

    let receipt;

    if (srcToken === Eth && destToken !== Eth)
      receipt = await swapEthToToken(destToken, inputValue);
    else if (srcToken !== Eth && destToken === Eth)
      receipt = await swapTokenToEth(srcToken, inputValue);
    else receipt = await swapTokenToToken(srcToken, destToken, inputValue);
    setTxPending(false);
    if (receipt && !receipt.hasOwnProperty("transactionHash"))
      notifyError(receipt);
    else notifySuccess();
  };

  const handleInsufficientAllowance = () => {
    notifyError(
      "Insufficient allowance. Click 'Insufficient Allowance' to increase it."
    );
    setSwapBtnText(INCREASE_ALLOWANCE);
  };

  const handleSwap = async () => {
    if (srcToken === Eth && destToken !== Eth) {
      performSwap();
    } else {
      // Check whether there is allowance when the swap deals with tokenEth/tokenToToken
      setTxPending(true);
      const result = await hasValidAllowance(account, srcToken, inputValue);
      setTxPending(false);
      if (result) performSwap();
      else handleInsufficientAllowance();
    }
  };

  return (
    <div className="border-[1px] border-[#ffeaa7] bg-[#ffeaa7] w-[500px] p-4 px-6 rounded-xl">
      <div className="flex items-center justify-between py-4 px-1 text-[#212429]">
        <p>Swap</p>
        <Cog />
      </div>
      <div className="relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600">
        {srcTokenComp}

        <div
          className="absolute left-1/2 -translate-x-1/2 -border-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110"
          onClick={handleReverseExchange}
        >
          {!currentRef ? <ArrowDown /> : <ArrowUp />}
        </div>
      </div>
      <div className="bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600">
        {destTokenComp}
      </div>
      <button
        className={getSwapBtnClassName()}
        onClick={() => {
          if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();
          else if (swapBtnText === SWAP) handleSwap();
        }}
      >
        {swapBtnText}
      </button>
      {txPending && <TransactionStatus />}

      <Toaster />
    </div>
  );
};

export default SwapComponent;
