import { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@lazorkit/wallet';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export const useWalletBalance = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchBalance = async () => {
    if (!publicKey) return;
    setLoading(true);
    try {
      const amount = await connection.getBalance(publicKey);
      setBalance(amount / LAMPORTS_PER_SOL);
    } catch (e) {
      console.error("Failed to fetch balance:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
    // Setup a subscription to update balance automatically when it changes
    if (publicKey) {
      const id = connection.onAccountChange(publicKey, () => fetchBalance());
      return () => { connection.removeAccountChangeListener(id); };
    }
  }, [publicKey, connection]);

  return { 
    balance, 
    loading, 
    solBalanceText: balance !== null ? `${balance.toFixed(4)} SOL` : '0.00 SOL' 
  };
};