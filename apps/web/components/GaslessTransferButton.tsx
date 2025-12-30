"use client";

import React, { useState } from "react";
import { useWallet } from "@lazorkit/wallet";

export const GaslessTransferButton = () => {
  const wallet: any = useWallet(); // Cast to any

  const [status, setStatus] = useState("idle");

  const handleSend = async () => {
    if (!wallet?.publicKey) {
      setStatus("no-wallet");
      return;
    }

    setStatus("sending");

    try {
      // You will fill in the real logic later
      console.log("Sending gasless transfer...");
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <button onClick={handleSend} disabled={status === "sending"}>
      {status === "sending" ? "Sending..." : "Send Gasless Transfer"}
    </button>
  );
};