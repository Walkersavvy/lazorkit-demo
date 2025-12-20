import { signAndSendTransaction } from "@lazorkit/wallet";
import { TransactionInstruction } from "@solana/web3.js";

export const useGaslessTx = () => {
  const sendGasless = async (instructions: TransactionInstruction[]) => {
    try {
      // The SDK handles Paymaster logic internally if paymasterUrl is in Provider
      const signature = await signAndSendTransaction({
        instructions: instructions,
        transactionOptions: {
          clusterSimulation: "devnet"
        }
      });
      return signature;
    } catch (err) {
      console.error("Gasless Tx failed:", err);
      throw err;
    }
  };

  return { sendGasless };
};