// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const initialSupply = hre.ethers.utils.parseEther("1000000");

  const JediToken = await hre.ethers.getContractFactory("ERC20BlackList");
  const jediToken = await JediToken.deploy('JediToken', 'JDT', 18, initialSupply);

  await jediToken.deployed();

  console.log('JediToken deploy address: ' + jediToken.address);


  const minLockTime = 1 * 60 * 60; // 1 hour
  const rewardPercent = 1; // 0.1%
  const rewardRate = 5 * 60; // 5 minutes
  const initRewardSupply = hre.ethers.utils.parseEther("1000");
  const rewardTokenName = 'Power Token';
  const rewardTokenSymbol = 'PWR';

  const StakingTC = await hre.ethers.getContractFactory("StakingTC");
  const stakingTC = await StakingTC.deploy(
    jediToken.address,
    minLockTime,
    rewardPercent,
    rewardRate,
    initRewardSupply,
    rewardTokenName,
    rewardTokenSymbol
    );
  
  await stakingTC.deployed();

  const rewardTokenAddress = await stakingTC.rewardTokenAddr();

  console.log('StakingTC deploy address: ' + stakingTC.address);
  console.log(rewardTokenName + ' deploy address: ' + rewardTokenAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
