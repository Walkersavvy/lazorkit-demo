import "./globals.css";
import { WalletClientProvider } from "@/components/WalletClientProvider";

export const metadata = {
  title: "Lazorkit Demo",
  description: "Seedless wallet, gasless transfers, passkey login",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletClientProvider>
          {children}
        </WalletClientProvider>
      </body>
    </html>
  );
}