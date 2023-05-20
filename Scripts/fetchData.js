// SPDX-License-Identifier: MIT
const { ethers } = require("hardhat");

async function fetchData() {
  // Retrieve PePeAggregator contract instance
  const PePeAggregator = await ethers.getContractFactory("PePeAggregator");
  const pepeAggregator = await PePeAggregator.attach("<PEPE_AGGREGATOR_CONTRACT_ADDRESS>");

  // Retrieve data from the contract
  const pepeData = await pepeAggregator.pepes("<PEPE_ADDRESS>");
  console.log("PePe Name:", pepeData.name);
  console.log("PePe Score:", pepeData.score.toNumber());
}

fetchData()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
