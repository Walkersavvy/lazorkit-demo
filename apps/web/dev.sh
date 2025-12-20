#!/bin/bash
echo "🧹 Cleaning up..."
# Kill any existing processes on port 3000
fuser -k 3000/tcp 2>/dev/null
pkill -9 node 2>/dev/null

# Build the core library first to ensure index.mjs is updated
echo "📦 Building @lazor/core..."
pnpm --filter @lazor/core build

# Launch the web app
echo "🚀 Starting Web App on 0.0.0.0 with 2GB RAM limit..."
export NODE_OPTIONS="--max-old-space-size=2048"
export HOSTNAME="0.0.0.0"

pnpm --filter lazor-app-web dev
