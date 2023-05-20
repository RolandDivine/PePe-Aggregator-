// SPDX-License-Identifier: MIT
const PePeAggregator = artifacts.require("PePeAggregator");
const Token = artifacts.require("Token");

module.exports = async function (deployer) {
  // Deploy PePeAggregator contract
  await deployer.deploy(PePeAggregator);

  // Deploy Token contract
  await deployer.deploy(Token);

  // You can optionally perform additional tasks here, such as initializing the contracts
  // or setting up any necessary connections between the contracts.

  // Example: Initialize the PePeAggregator contract with the Token address
  const pepeAggregator = await PePeAggregator.deployed();
  const token = await Token.deployed();
  await pepeAggregator.initialize(token.address);

  // You can also perform other tasks, such as transferring initial token balances or setting up contract permissions.

  // Example: Transfer initial token balances
  const initialTokenBalance = web3.utils.toWei("1000", "ether");
  const accounts = await web3.eth.getAccounts();
  await token.transfer(accounts[1], initialTokenBalance);
};
