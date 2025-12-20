"use client";

import React from "react";
import { LazorkitProvider } from "@lazorkit/wallet";

export const WalletProvider = ({ children }) => {
  return <LazorkitProvider>{children}</LazorkitProvider>;
};