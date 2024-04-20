import { ethers } from "ethers";
import CustomDexABI from "./CustomDex.json";
import CustomTokenABI from "./CustomEx.json";

export const tokenContract = async (address) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = await provider.getSigner();

    const contractRead = new Contract(address, CustomTokenABI.abi, signer);
    return contractRead;
  }
};

export const contract = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = await provider.getSigner();

    const contractRead = new Contract(
      "0x834D1A80154FB0497E0aA995b90c27572ADE89c8",
      CustomDexABI.abi,
      signer
    );

    return contractRead;
  }
};
