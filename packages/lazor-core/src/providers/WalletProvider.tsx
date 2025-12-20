"use client";

import React, { useMemo } from 'react';
import { LazorkitProvider } from '@lazorkit/wallet';

export interface WalletProviderProps {
  children: React.ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  // If your version of Lazorkit uses a config object, 
  // ensure it matches the expected internal shape.
  const walletConfig = useMemo(() => ({
    // Add specific lazorkit config options here if needed
  }), []);

  return (
    <LazorkitProvider>
      {children}
    </LazorkitProvider>
  );
};
