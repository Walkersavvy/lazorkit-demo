import { GaslessTransferButton } from "../components/SendSolButton";

export default function Page() {
  return (
    <main style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>⚡ Lazorkit Challenge</h1>
        <p style={{ color: '#848d97' }}>Experience Gasless Transactions on Solana</p>
      </header>

      <section className="challenge-container" style={{ 
        background: '#15191e', 
        padding: '30px', 
        borderRadius: '12px', 
        border: '1px solid #2d333b' 
      }}>
        <h2 style={{ marginTop: 0 }}>Gasless Transfer</h2>
        <p>
          This demo uses a <strong>Smart Account</strong>. When you click the button, 
          the transaction is sponsored by our Paymaster—meaning you pay 0 SOL in gas fees.
        </p>
        
        <div style={{ marginTop: '30px' }}>
          <GaslessTransferButton />
        </div>
      </section>

      <footer style={{ marginTop: '40px', opacity: 0.5, fontSize: '0.8rem', textAlign: 'center' }}>
        Powered by Lazorkit Account Abstraction
      </footer>
    </main>
  );
}