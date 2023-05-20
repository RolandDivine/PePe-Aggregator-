// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PePeAggregator {
    struct PePe {
        string name;
        uint256 score;
    }

    mapping(address => PePe) public pepes;

    event PePeRegistered(address indexed pepeAddress, string name, uint256 score);

    function registerPePe(string memory name, uint256 score) external {
        require(bytes(name).length > 0, "Name must not be empty");
        require(pepes[msg.sender].score == 0, "PePe already registered");

        pepes[msg.sender] = PePe(name, score);

        emit PePeRegistered(msg.sender, name, score);
    }
}
