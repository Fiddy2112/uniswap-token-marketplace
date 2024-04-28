import { BigInt, ethers } from "ethers";
import { contract, tokenContract } from "./contract";
import { toEth } from "./utils";

function toWei(amount) {
  const toWei = ethers.parseUnits(amount.toString());
  return toWei.toString();
}

function parseErrorMsg(err) {
  const json = JSON.parse(JSON.stringify(err));
  return json?.reason || json?.error?.message;
}

export const swapEthToToken = async (tokenName, amount) => {
  try {
    let tx = { value: toWei(amount) };
    const contractObj = await contract();
    const data = await contractObj.swapEthToToken(tokenName, tx);

    const receipt = await data.wait();

    return receipt;
  } catch (err) {
    return parseErrorMsg(err);
  }
};

export const hasValidAllowance = async (owner, token, amount) => {
  try {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(token);

    const getContractObj = await tokenContract(address);

    const data = await getContractObj.allowance(
      owner,
      "0x5bd1a811bBA69A3d912aBB1f8bF43fB7782da520"
    );

    const result = BigInt(data.toString()).gte(BigInt(toWei(amount)));

    return result;
  } catch (err) {
    return parseErrorMsg(err);
  }
};

export const swapTokenToEth = async (tokenName, amount) => {
  try {
    const contractObj = await contract();
    const data = await contractObj.swapTokentoEth(tokenName, toWei(amount));

    const receipt = await data.wait();

    return receipt;
  } catch (err) {
    return parseErrorMsg(err);
  }
};

export const swapTokenToToken = async (srcToken, destToken, amount) => {
  try {
    const contractObj = await contract();

    const data = await contractObj.swapTokenToToken(
      srcToken,
      destToken,
      toWei(amount)
    );

    const receipt = await data.wait();

    return receipt;
  } catch (err) {
    return parseErrorMsg(err);
  }
};

export const getTokenBalance = async (tokenName, address) => {
  try {
    const contractObj = await contract();
    const data = await contractObj.getBalance(tokenName, address);
    return data;
  } catch (err) {
    return parseErrorMsg(err);
  }
};

export const getTokenAddress = async (tokenName) => {
  try {
    const contractObj = await contract();
    const data = await contractObj.getTokenAddress(tokenName);
    console.log("getTokenAddress", data);
    return data;
  } catch (err) {
    return parseErrorMsg(err);
  }
};

export const increaseAllowance = async (tokenName, amount) => {
  try {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(tokenName);
    const tokenContract = await tokenContract(address);

    const data = await tokenContract.approve(
      "0x5bd1a811bBA69A3d912aBB1f8bF43fB7782da520",
      toWei(amount)
    );

    const receipt = await data.wait();
    return receipt;
  } catch (err) {
    return parseErrorMsg(err);
  }
};

export const getAllHistory = async () => {
  try {
    const contractObj = await contract();
    const getAllHistory = await contractObj.getAllHistory();

    const historyTransaction = await getAllHistory.map((history, i) => ({
      historyId: history.historyId.toNumber(),
      tokenA: history.tokenA,
      tokenB: history.tokenB,
      inputValue: toEth(history?.inputValue),
      outputValue: toEth(history?.outputValue),
      userAddress: history.userAddress,
    }));

    return historyTransaction;
  } catch (err) {
    return parseErrorMsg(err);
  }
};
