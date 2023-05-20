import { ethers } from 'ethers';
import PePeAggregator from '../contracts/PePeAggregator.json';

export const getPePeAggregatorContract = (signer) => {
  const networkId = process.env.REACT_APP_NETWORK_ID;
  const contractAddress = process.env.REACT_APP_PEPE_AGGREGATOR_ADDRESS;

  const provider = new ethers.providers.InfuraProvider(networkId, process.env.REACT_APP_INFURA_PROJECT_ID);
  const contract = new ethers.Contract(contractAddress, PePeAggregator.abi, signer || provider);

  return contract;
};
