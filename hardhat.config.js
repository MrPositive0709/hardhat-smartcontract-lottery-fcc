require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockComfirmations: 1,
    },
    sepolia: {
      chainId: 11155111,
      blockComfirmations: 6,
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: "0.8.18",
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
};
