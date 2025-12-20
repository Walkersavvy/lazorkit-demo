"use client";

import React, { useState } from "react";
import { useWallet } from "@lazorkit/wallet";
import { SystemProgram, Transaction, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const GaslessTransferButton = () => {
  const { publicKey, sendTransaction, connected } = useWallet();
  const [status, setStatus] = useState("idle");

  const handleSend = async () => {
    if (!connected || !publicKey) return;

    setStatus("sending");

    try {
      const to = new PublicKey("ENTER_RECIPIENT_ADDRESS_HERE");

      const tx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: to,
          lamports: 0.01 * LAMPORTS_PER_SOL,
        })
      );

      await sendTransaction(tx);

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <button
      onClick={handleSend}
      disabled={status === "sending"}
      style={{
        padding: "12px 24px",
        background: "#10b981",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "pointer",
        fontWeight: "bold",
        marginTop: "1rem",
      }}
    >
      {status === "sending" ? "Sending..." : "Send Gasless Transfer"}
    </button>
  );
};