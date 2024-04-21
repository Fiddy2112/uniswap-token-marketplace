import { ethers } from "ethers";

export function toWei(amount, decimals = 18) {
  const toWei = ethers.parseUnits(amount, decimals);
  return toWei.toString();
}

export function toEth(amount, decimals = 18) {
  const toEth = ethers.formatUnits(amount, decimals);
  return toEth.toString();
}

export const numberFormat = (number) =>
  new Intl.NumberFormat().format(Number(number));

export const showAddress = (address) => {
  return `${address?.substring(0, 4)}...${address?.substring(
    address.length - 4,
    address.length - 1
  )}`;
};
