"use client";

import "./globals.css";
import { WalletProvider } from "@lazor/core"; // your local package

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}