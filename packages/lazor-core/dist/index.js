var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  WalletProvider: () => WalletProvider,
  useGaslessTx: () => useGaslessTx
});
module.exports = __toCommonJS(index_exports);

// src/providers/WalletProvider.tsx
var import_wallet = require("@lazorkit/wallet");
var import_jsx_runtime = require("react/jsx-runtime");
var WalletProvider = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_wallet.LazorkitProvider, { children });
};

// src/hooks/useGaslessTx.ts
var import_react = require("react");
var import_wallet2 = require("@lazorkit/wallet");
var useGaslessTx = () => {
  const [loading, setLoading] = (0, import_react.useState)(false);
  const wallet = (0, import_wallet2.useWallet)();
  const sendGaslessTransaction = async (transaction, connection) => {
    if (!wallet.publicKey) {
      throw new Error("Wallet not connected or publicKey missing");
    }
    setLoading(true);
    try {
      console.log("Processing gasless transaction for:", wallet.publicKey.toString());
      const signature = await wallet.sendTransaction(transaction, connection);
      return { success: true, signature };
    } catch (error) {
      console.error("Transaction failed", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { sendGaslessTransaction, loading, wallet };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WalletProvider,
  useGaslessTx
});
