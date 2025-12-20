#!/bin/bash
echo "🛑 Killing old processes..."
fuser -k 3000/tcp 2>/dev/null
pkill -9 node 2>/dev/null

echo "📦 Building core library..."
# Building the library once prevents the dev server from trying to re-build it constantly
pnpm --filter @lazor/core build

echo "🚀 Launching Web App from local directory..."
cd apps/web

# 1. No Turbo (saves 50% CPU)
# 2. Max memory limit (prevents OOM crashes)
# 3. Host 0.0.0.0 (required for Codespaces)
NODE_OPTIONS="--max-old-space-size=1536" HOSTNAME=0.0.0.0 npx next dev --no-turbo
