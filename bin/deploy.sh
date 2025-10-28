#!/bin/bash
# Ensures script terminates immediately on any command failure
set -e

# 1. Get the environment from the first argument (e.g., 'preview' or 'production')
ENV=$1

# 2. Validate that an environment argument was provided
if [ -z "$ENV" ]; then
    echo "Error: Deployment environment (e.g., preview, production) must be provided as an argument."
    echo "Usage: bash bin/deploy.sh [environment]"
    exit 1
fi

echo "--- Starting EAS Deployment for Environment: $ENV ---"

echo "1. Pulling '$ENV' environment variables..."
# Use the parameter for the environment pull
eas env:pull --environment "$ENV" --non-interactive --path .env

echo "2. Exporting web assets (API-only and clearing cache)..."
npx expo export -p web --api-only --clear

echo "3. Deploying updates to '$ENV' channel..."

if [ "$ENV" == "production" ]; then
    echo "Detected production: Running 'eas deploy --prod'"
    eas deploy --prod
else
    echo "Detected '$ENV' environment: Running 'eas deploy --alias $ENV'"
    eas deploy --alias "$ENV"
fi

echo "✅ Deployment successful for $ENV!"
