#!/bin/bash
echo "🛑 Stopping heavy processes..."
fuser -k 3000/tcp 2>/dev/null
pkill -9 node 2>/dev/null

echo "🧹 Cleaning cache to free space..."
rm -rf apps/web/.next

echo "🚀 Launching in 'Light Mode' (Webpack + Memory Limit)..."
# NODE_OPTIONS limits the RAM usage to 2GB to prevent freezing
# --webpack disables Turbopack which is heavy on CPU
export NODE_OPTIONS="--max-old-space-size=2048"
HOSTNAME=0.0.0.0 pnpm --filter lazor-app-web dev -- --webpack
