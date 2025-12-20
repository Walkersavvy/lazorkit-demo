import { ConnectButton } from "@/components/ConnectButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">Lazorkit</h1>
        <p className="text-zinc-400 text-lg">Next-Gen Solana Gasless UX</p>
        
        <div className="pt-4">
          <ConnectButton />
        </div>
      </div>
    </main>
  );
}