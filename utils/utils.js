import { ethers } from "ethers";

export function toWei(amount, decimals = 18) {
  const toWei = ethers.parseUnits(amount, decimals);
  return toWei.toString();
}

export function toEth(amount, decimals = 18) {
  const toEth = ethers.formatUnits(amount, decimals);
  return toEth.toString();
}
