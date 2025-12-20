"use client";

import React from "react";
import { useWallet } from "@lazorkit/wallet";

export const ConnectButton = () => {
  const { connected, connect, disconnect } = useWallet();

  return (
    <button
      onClick={connected ? disconnect : connect}
      style={{
        padding: "12px 24px",
        background: connected ? "#334155" : "#3b82f6",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {connected ? "Disconnect" : "Connect Wallet"}
    </button>
  );
};