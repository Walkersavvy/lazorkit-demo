# 🚀 Lazor Starter

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/Walkersavvy/lazorkit-demo)
![CI Status](https://github.com/Walkersavvy/lazorkit-demo/actions/workflows/ci.yml/badge.svg)

---

# Lazorkit Seedless Starter Kit (Web + Gasless + Passkeys)

This repo is a minimal, production‑minded starter kit showing how to integrate **Lazorkit** into a modern **Next.js App Router** app.

It demonstrates:

- **Seedless wallet UX** powered by Lazorkit
- **Gasless transfers** abstracting transaction fees away from end‑users
- **Passkey‑oriented login** for passwordless, future‑proof authentication
- A **clean, composable provider setup** that can be dropped into any dApp

The goal: make it trivial for teams to copy this structure, plug in their own flows, and ship Lazorkit‑powered experiences quickly and safely.

---

## Features

- **Wallet connection:**
  - Fully wired `WalletProvider` based on `@lazorkit/wallet`
  - `ConnectButton` that toggles connect / disconnect

- **Gasless transactions:**
  - Thin `useGaslessTransfer` wrapper (in `@lazor/core`)
  - Example `GaslessTransferButton` component in the web app

- **Passkey login (skeleton):**
  - UI + flow scaffolding for passkey‑based auth
  - Ready to wire into Lazorkit’s passkey APIs

- **Monorepo structure:**
  - `apps/web` → Next.js 16 App Router app
  - `packages/lazor-core` → reusable provider + hooks

---

## Project structure

```text
lazorkit-demo/
│
├── apps/
│   └── web/
│       ├── app/
│       │   ├── layout.tsx          # Root layout, wraps app in WalletProvider
│       │   └── page.tsx            # Demo homepage, renders all example flows
│       ├── components/
│       │   ├── ConnectButton.tsx
│       │   ├── GaslessTransferButton.tsx
│       │   └── PasskeyLoginButton.tsx
│       └── public/
│
├── packages/
│   └── lazor-core/
│       ├── src/
│       │   ├── providers/
│       │   │   └── WalletProvider.tsx
│       │   ├── hooks/
│       │   │   └── useGaslessTransfer.ts
│       │   └── index.ts
│       └── dist/                    # Build output
│
└── pnpm-workspace.yaml


## Architecture Diagram

```text
┌───────────────────────────────────────────────────────────────┐
│                          User                                │
│        (Browser / Mobile Web, Next.js Frontend)             │
└───────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────┐
│                     Next.js App Router                        │
│                    (apps/web/app/*)                           │
│                                                               │
│  - layout.tsx: wraps app with WalletProvider                  │
│  - page.tsx: renders Connect, Gasless, Passkey flows          │
└───────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────┐
│                 WalletProvider (@lazor/core)                  │
│      packages/lazor-core/src/providers/WalletProvider.tsx     │
│                                                               │
│  - Thin wrapper around LazorkitProvider                       │
│  - No props, no config, no loops                              │
└───────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────┐
│                   LazorkitProvider                            │
│                     (@lazorkit/wallet)                        │
│                                                               │
│  - Manages wallet state                                       │
│  - Exposes hooks: useWallet(), etc.                           │
│  - Coordinates with Lazorkit backend + paymaster              │
└───────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────┐
│            Lazorkit SDK + Paymaster + Portal APIs             │
│    (Configured via NEXT_PUBLIC_LAZORKIT_* env variables)      │
│                                                               │
│  - RPC URL                                                    │
│  - Paymaster URL (for gasless)                                │
│  - Portal URL (auth / UX)                                     │
└───────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────┐
│                      Solana Network                           │
│                     (Devnet / Mainnet)                        │
│                                                               │
│  - Gasless transactions are relayed and paid by paymaster     │
│  - User sees a smooth, seedless flow                          │
└───────────────────────────────────────────────────────────────┘
