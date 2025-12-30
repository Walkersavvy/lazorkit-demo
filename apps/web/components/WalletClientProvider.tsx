"use client";

import { WalletProvider } from "@lazor/core";

export function WalletClientProvider({ children }) {
  return <WalletProvider>{children}</WalletProvider>;
}