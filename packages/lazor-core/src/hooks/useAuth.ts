import { useWallet } from "@lazorkit/wallet";
import { useCallback } from "react";

export const useAuth = () => {
  const { connect, disconnect, isConnected, smartWalletPubkey, isLoading } = useWallet();

  const login = useCallback(async () => {
    try {
      // In 2025, this automatically triggers WebAuthn (Web) or FaceID (Mobile)
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