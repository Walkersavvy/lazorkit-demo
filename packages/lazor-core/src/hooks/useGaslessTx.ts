import { useWallet, useConnection } from '@lazorkit/wallet';
import { Transaction, SystemProgram, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

export const useGaslessTx = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const transferSOLGasless = async (to: string, amount: number) => {
    if (!publicKey) throw new Error("Wallet not connected");

    // 1. Create a standard Solana transaction
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );

    // 2. Send via Lazorkit (The Paymaster handles the fee automatically)
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