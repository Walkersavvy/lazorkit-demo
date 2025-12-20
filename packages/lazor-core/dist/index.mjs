// src/providers/WalletProvider.tsx
import { useMemo } from "react";
import { LazorkitProvider } from "@lazorkit/wallet";
import { jsx } from "react/jsx-runtime";
var WalletProvider = ({ children }) => {
  const walletConfig = useMemo(() => ({
    // Add specific lazorkit config options here if needed
  }), []);
  return /* @__PURE__ */ jsx(LazorkitProvider, { children });
};

// src/hooks/useAuth.ts
import { useWallet } from "@lazorkit/wallet";
import { useCallback } from "react";
var useAuth = () => {
  const { connect, disconnect, isConnected, smartWalletPubkey, isLoading } = useWallet();
  const login = useCallback(async () => {
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
import { useWallet as useWallet2, useConnection } from "@lazorkit/wallet";
import { Transaction, SystemProgram, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
var useGaslessTx = () => {
  const { publicKey, sendTransaction } = useWallet2();
  const { connection } = useConnection();
  const transferSOLGasless = async (to, amount) => {
    if (!publicKey) throw new Error("Wallet not connected");
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL
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
export {
  WalletProvider,
  useAuth,
  useGaslessTx
};
