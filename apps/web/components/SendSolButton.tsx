"use client";
import React, { useState } from "react";
import { useWallet } from "@lazorkit/wallet";
import { SystemProgram, Transaction, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const GaslessTransferButton = () => {
  // Pull the base properties we found in the grep
  const { 
    smartWalletPubkey, 
    isConnected, 
    wallet 
  } = useWallet();

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSend = async () => {
    // Check if wallet and the adapter's sendTransaction method exist
    if (!isConnected || !smartWalletPubkey || !wallet?.adapter) {
      alert("Please connect your wallet first!");
      return;
    }

    setStatus("sending");

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: smartWalletPubkey,
          toPubkey: new PublicKey("Gv3uYAsX9R8i6GfD9GjU7WQX2VvE2zQy9XzQzQzQzQzQ"),
          lamports: 0.01 * LAMPORTS_PER_SOL,
        })
      );

      // In Lazorkit, the send method usually lives on the adapter
      const signature = await wallet.adapter.sendTransaction(transaction);
      
      console.log("Tx Signature:", signature);
      setStatus("success");
    } catch (err) {
      console.error("Transfer Error:", err);
      setStatus("error");
    }
  };

  return (
    <button 
      onClick={handleSend} 
      disabled={status === "sending"}
    >
      {status === "sending" ? "Processing..." : "Send Gasless Transfer"}
    </button>
  );
};