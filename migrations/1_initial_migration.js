// const ProofToken = artifacts.require("ProofToken");

// module.exports = function (deployer) {
//   deployer.deploy(ProofToken,"ProofToken","PTN");
// };

const ProofToken = artifacts.require("ProofTokenBEP1155")

module.exports = function (deployer) {
  deployer.deploy(ProofToken,"ProofToken","PTN");
};