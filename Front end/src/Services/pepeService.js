import { ethers } from 'ethers';
import { getPePeAggregatorContract } from './contractService';

export const registerPePe = async (name, score) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const pepeAggregatorContract = getPePeAggregatorContract(signer);

    await pepeAggregatorContract.registerPePe(name, score);
  } catch (error) {
    throw new Error('Failed to register PePe: ' + error.message);
  }
};
