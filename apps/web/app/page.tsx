"use client";

import React from "react";
import { ConnectButton } from "@/components/ConnectButton";

export default function Home() {
  return (
    <main
      style={{
        padding: "4rem",
        textAlign: "center",
        fontFamily: "sans-serif",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Lazorkit Demo</h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#94a3b8",
          marginBottom: "2rem",
        }}
      >
        Connect your wallet to begin.
      </p>

      <div
        style={{
          padding: "2rem",
          border: "1px solid #334155",
          borderRadius: "12px",
          display: "inline-block",
        }}
      >
        <ConnectButton />
      </div>
    </main>
  );
}