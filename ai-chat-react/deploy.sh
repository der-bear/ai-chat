#!/bin/bash
set -e

echo "🚀 Deploying AI Chat React Application"

# Check if OPENAI_API_KEY is set
if [ -z "$OPENAI_API_KEY" ]; then
    echo "❌ Error: OPENAI_API_KEY environment variable is required"
    echo "Please set it with: export OPENAI_API_KEY=your_api_key_here"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔍 Building RAG index..."
npm run build:rag

echo "🏗️  Building application for production..."
npm run build

echo "✅ Build complete! Files are in ./dist/"
echo ""
echo "📁 Deploy the ./dist/ directory to your hosting service"
echo ""
echo "🔧 Don't forget to set environment variables on your hosting platform:"
echo "   - VITE_OPENAI_API_KEY=your_api_key_here"
echo "   - VITE_OPENAI_MODEL=gpt-4o"
echo ""
echo "🎉 Deployment preparation complete!"