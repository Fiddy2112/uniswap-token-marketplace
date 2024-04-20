const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {
  const customDex = m.contract("CustomDex");

  return { customDex };
});
