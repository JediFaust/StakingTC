require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    testnet: {
      url: process.env.BINANCE_TESTNET_URL,
      chainId: 97,
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    },
  }
};
