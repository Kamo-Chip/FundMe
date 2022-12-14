const { network } = require("hardhat");
const {
  developmentChains,
  decimals,
  intialAnswer,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  console.log(deployer);

  if (chainId == 31337) {
    log("Local network detected! Deploying mocks...");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [decimals, intialAnswer],
    });
    log("Mocks deployed!");
    log("-------------------------------------------------------------------");
  }
};

module.exports.tags = ["all", "mocks"];
