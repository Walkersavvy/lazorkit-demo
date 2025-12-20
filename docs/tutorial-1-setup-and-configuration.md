# Tutorial 1 — Setup and Configuration

This tutorial explains how to set up the Lazor Starter monorepo, configure environment variables, and get both Web and Mobile apps running locally.

- Create a `.env.local` in the repository root
- Provide NEXT_PUBLIC_* variables for RPC, Portal URL, Paymaster, and API keys
- Install dependencies with `pnpm install` at repo root
- Run `pnpm dev:web` (web) or `pnpm dev:mobile` (mobile)

See the main README for important HTTPS notes required for WebAuthn.