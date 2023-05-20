// SPDX-License-Identifier: MIT
const { ethers } = require("hardhat");

async function main() {
  // Deploy PePeAggregator contract
  const PePeAggregator = await ethers.getContractFactory("PePeAggregator");
  const pepeAggregator = await PePeAggregator.deploy();
  await pepeAggregator.deployed();

  console.log("PePeAggregator contract deployed to:", pepeAggregator.address);

  // Deploy Token contract
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();

  console.log("Token contract deployed to:", token.address);

  // You can optionally perform additional tasks here, such as initializing the contracts
  // or setting up any necessary connections between the contracts.

  // Example: Initialize the PePeAggregator contract with the Token address
  await pepeAggregator.initialize(token.address);

  console.log("Contracts initialized!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
