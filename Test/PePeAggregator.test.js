// SPDX-License-Identifier: MIT
const { expect } = require("chai");

describe("PePeAggregator", function () {
  let pepeAggregator;
  let owner;
  const name = "PePe";
  const score = 100;

  before(async function () {
    const PePeAggregator = await ethers.getContractFactory("PePeAggregator");
    pepeAggregator = await PePeAggregator.deploy();
    await pepeAggregator.deployed();

    [owner] = await ethers.getSigners();
  });

  it("should register a new PePe", async function () {
    await pepeAggregator.registerPePe(name, score);

    const pepe = await pepeAggregator.pepes(owner.address);
    expect(pepe.name).to.equal(name);
    expect(pepe.score).to.equal(score);
  });

  it("should revert when registering a PePe with an empty name", async function () {
    await expect(pepeAggregator.registerPePe("", score)).to.be.revertedWith("Name must not be empty");
  });

  it("should revert when registering an already registered PePe", async function () {
    await expect(pepeAggregator.registerPePe(name, score)).to.be.revertedWith("PePe already registered");
  });
});
