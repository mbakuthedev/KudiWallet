const Withdraw = artifacts.require("Withdraw");

module.exports = function(deployer) {
  deployer.deploy(Withdraw);
};
