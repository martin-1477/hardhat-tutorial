// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.6;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KToken is ERC20 {
    uint256 public initialSupply = 1000000;

    constructor () ERC20("ZZM Token", "ZZM") {
        _mint(msg.sender, initialSupply); // 주의!
    }


}