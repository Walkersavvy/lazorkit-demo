"use client";

// src/index.tsx
import { useMemo } from "react";
import { LazorkitProvider } from "@lazorkit/wallet";
import { jsx } from "react/jsx-runtime";
var WalletProvider = ({ children, config }) => {
  const memoizedConfig = useMemo(() => ({
    appName: "Lazorkit Demo",
    ...config
  }), [config]);
  return /* @__PURE__ */ jsx(LazorkitProvider, { config: memoizedConfig, children });
};
export {
  WalletProvider
};
