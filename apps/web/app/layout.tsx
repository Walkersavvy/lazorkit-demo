import { WalletProvider } from '@lazor/core';

const config = {
  rpcUrl: process.env.NEXT_PUBLIC_LAZORKIT_RPC_URL!,
  paymasterUrl: process.env.NEXT_PUBLIC_LAZORKIT_PAYMASTER_URL!,
  portalUrl: process.env.NEXT_PUBLIC_LAZORKIT_PORTAL_URL!,
  network: 'devnet' as const, // or pull from env
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider config={config}>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}