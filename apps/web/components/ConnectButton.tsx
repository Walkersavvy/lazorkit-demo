"use client";

import { useWallet } from "@lazor/core";

export const ConnectButton = () => {
  const { publicKey, connect, disconnect, connected, connecting } = useWallet();

  // Helper to show short address: 4aKz...9xR2
  const addressText = publicKey 
    ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`
    : "Connect Wallet";

  return (
    <button
      onClick={connected ? disconnect : connect}
      disabled={connecting}
      className={`px-6 py-3 rounded-xl font-bold transition-all active:scale-95 ${
        connected 
          ? "bg-zinc-800 text-zinc-400 border border-zinc-700 hover:bg-zinc-700" 
          : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20"
      }`}
    >
      {connecting ? "Connecting..." : addressText}
    </button>
  );
};