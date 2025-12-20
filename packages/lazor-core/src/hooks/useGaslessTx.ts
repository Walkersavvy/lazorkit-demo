import { useState } from 'react';
import { useWallet } from "@lazorkit/wallet";
import { Connection, Transaction } from "@solana/web3.js";

export const useGaslessTx = () => {
  const [loading, setLoading] = useState(false);
  const wallet = useWallet() as any; // Cast to any to bypass strict interface mismatches

  const sendGaslessTransaction = async (transaction: Transaction, connection: Connection) => {
    // We check for the properties we expect to exist at runtime
    if (!wallet.publicKey) {
      throw new Error("Wallet not connected or publicKey missing");
    }
    
    setLoading(true);
    try {
      console.log("Processing gasless transaction for:", wallet.publicKey.toString());
      
      // Attempt to use the sendTransaction method
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
