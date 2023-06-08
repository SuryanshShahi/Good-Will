const Payment = artifacts.require("Payment1");

module.exports = function (deployer) {
  deployer.deploy(Payment);
};
