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
  useAuth: () => useAuth,
  useGaslessTx: () => useGaslessTx
});
module.exports = __toCommonJS(index_exports);

// src/providers/WalletProvider.tsx
var import_react = require("react");
var import_wallet = require("@lazorkit/wallet");
var import_jsx_runtime = require("react/jsx-runtime");
var WalletProvider = ({ children }) => {
  const walletConfig = (0, import_react.useMemo)(() => ({
    // Add specific lazorkit config options here if needed
  }), []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_wallet.LazorkitProvider, { children });
};

// src/hooks/useAuth.ts
var import_wallet2 = require("@lazorkit/wallet");
var import_react2 = require("react");
var useAuth = () => {
  const { connect, disconnect, isConnected, smartWalletPubkey, isLoading } = (0, import_wallet2.useWallet)();
  const login = (0, import_react2.useCallback)(async () => {
    try {
      const account = await connect();
      console.log("Authenticated Smart Wallet:", account.smartWallet.toString());
    } catch (err) {
      console.error("Auth failed:", err);
    }
  }, [connect]);
  return {
    isLoggedIn: isConnected,
    address: smartWalletPubkey?.toString(),
    login,
    logout: disconnect,
    isLoading
  };
};

// src/hooks/useGaslessTx.ts
var import_wallet3 = require("@lazorkit/wallet");
var import_web3 = require("@solana/web3.js");
var useGaslessTx = () => {
  const { publicKey, sendTransaction } = (0, import_wallet3.useWallet)();
  const { connection } = (0, import_wallet3.useConnection)();
  const transferSOLGasless = async (to, amount) => {
    if (!publicKey) throw new Error("Wallet not connected");
    const transaction = new import_web3.Transaction().add(
      import_web3.SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new import_web3.PublicKey(to),
        lamports: amount * import_web3.LAMPORTS_PER_SOL
      })
    );
    try {
      const signature = await sendTransaction(transaction, connection);
      console.log("Transaction sent! Signature:", signature);
      return signature;
    } catch (error) {
      console.error("Gasless transfer failed:", error);
      throw error;
    }
  };
  return { transferSOLGasless };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WalletProvider,
  useAuth,
  useGaslessTx
});
