require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    testnet: {
      gas: 3000000,
      gasPrice: 20000000000,
      url: process.env.BINANCE_TESTNET_URL,
      chainId: 97,
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    },
    etherscan: {
      url: process.env.BINANCE_TESTNET_URL,
      apiKey: {
        bscTestnet: process.env.BSCSCAN_API_TOKEN
      }
    },
  }
};
