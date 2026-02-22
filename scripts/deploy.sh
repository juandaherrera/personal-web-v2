#!/usr/bin/env bash
set -e

# Load environment variables from .env if it exists
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
fi

: "${STORAGE_ACCOUNT:?Need to set STORAGE_ACCOUNT}"
: "${RESOURCE_GROUP:?Need to set RESOURCE_GROUP}"
: "${FRONTDOOR_PROFILE:?Need to set FRONTDOOR_PROFILE}"
: "${FRONTDOOR_ENDPOINT:?Need to set FRONTDOOR_ENDPOINT}"

echo "🔨 Building project..."
make build

if [ ! -d "out" ]; then
  echo "❌ Build failed: 'out' directory not found."
  exit 1
fi

echo "🚀 Uploading to Blob..."
az storage blob upload-batch \
  --account-name "$STORAGE_ACCOUNT" \
  --destination '$web' \
  --source ./out \
  --overwrite

echo "🧹 Purging Front Door cache..."
az afd endpoint purge \
  --resource-group "$RESOURCE_GROUP" \
  --profile-name "$FRONTDOOR_PROFILE" \
  --endpoint-name "$FRONTDOOR_ENDPOINT" \
  --content-paths '/*'

echo "✅ Deploy completed."