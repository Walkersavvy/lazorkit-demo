"use client";

import "./globals.css";
import { WalletProvider } from "@lazor/core";

// Optional: define config for future use (gasless, passkeys, etc.)
const lazorConfig = {
  rpcUrl: process.env.NEXT_PUBLIC_LAZORKIT_RPC_URL || "",
  paymasterUrl: process.env.NEXT_PUBLIC_LAZORKIT_PAYMASTER_URL || "",
  portalUrl: process.env.NEXT_PUBLIC_LAZORKIT_PORTAL_URL || "",
  network: "devnet" as const,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Provider must NOT receive config */}
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}