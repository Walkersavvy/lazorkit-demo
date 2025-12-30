// src/providers/WalletProvider.tsx
import { LazorkitProvider } from "@lazorkit/wallet";
import { jsx } from "react/jsx-runtime";
var WalletProvider = ({ children }) => {
  return /* @__PURE__ */ jsx(LazorkitProvider, { children });
};

// src/hooks/useGaslessTx.ts
import { useState } from "react";
import { useWallet } from "@lazorkit/wallet";
var useGaslessTx = () => {
  const [loading, setLoading] = useState(false);
  const wallet = useWallet();
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
export {
  WalletProvider,
  useGaslessTx
};
