"use client";

import React from "react";
import { useWallet } from "@lazorkit/wallet";

export const ConnectButton = () => {
  const wallet: any = useWallet(); // Cast to any to bypass incomplete types

  const connected = !!wallet?.publicKey;

  const label = connected
    ? wallet.publicKey.toBase58().slice(0, 4) +
      "..." +
      wallet.publicKey.toBase58().slice(-4)
    : "Connect Wallet";

  return (
    <button
      onClick={() => {
        if (connected) wallet.disconnect?.();
        else wallet.connect?.();
      }}
    >
      {label}
    </button>
  );
};