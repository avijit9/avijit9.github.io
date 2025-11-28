#!/bin/bash

set -e  # Exit on error

# Get the directory of the script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Step 1: Push source files to 'source' branch
echo "📦 Step 1: Pushing source files to 'source' branch..."
if [ ! -d .git ]; then
    git init
fi

# Configure git
git config user.name "${GIT_USER_NAME:-GitHub Actions}" 2>/dev/null || true
git config user.email "${GIT_USER_EMAIL:-actions@github.com}" 2>/dev/null || true

# Set remote
if git remote get-url origin >/dev/null 2>&1; then
    git remote set-url origin https://github.com/avijit9/avijit9.github.io.git
else
    git remote add origin https://github.com/avijit9/avijit9.github.io.git
fi

# Remove workflow files from git tracking (to avoid PAT scope issues)
# Users can add them manually via GitHub web interface if needed
git rm -r --cached .github/workflows/ 2>/dev/null || true

# Add source files (excluding public folder and workflow files)
# Note: .github/workflows/ is excluded via .gitignore to avoid PAT scope issues
git add .
git add -f .gitignore

# Commit source files
if git diff --staged --quiet; then
    echo "   No source changes to commit."
else
    git commit -m "Update source files - $(date +'%Y-%m-%d %H:%M:%S')" || echo "   Nothing to commit"
fi

# Push to source branch
echo "   Pushing to source branch..."
git branch -M source 2>/dev/null || git checkout -b source
git push -f origin source || git push -u origin source

echo "   ✅ Source files pushed to 'source' branch"
echo ""

# Step 2: Build and deploy to main branch
echo "🚀 Step 2: Building and deploying to main branch..."
hugo --minify

# Deploy from public folder to main branch
cd public

# Initialize git if needed, or use existing
if [ ! -d .git ]; then
    git init
fi

# Configure git
git config user.name "${GIT_USER_NAME:-GitHub Actions}" 2>/dev/null || true
git config user.email "${GIT_USER_EMAIL:-actions@github.com}" 2>/dev/null || true

# Add all files
git add .

# Commit changes
if git diff --staged --quiet; then
    echo "   No changes to deploy."
else
    git commit -m "Deploy site - $(date +'%Y-%m-%d %H:%M:%S')" || echo "   Nothing to commit"
fi

# Set branch to main
git branch -M main

# Set remote
if git remote get-url origin >/dev/null 2>&1; then
    git remote set-url origin https://github.com/avijit9/avijit9.github.io.git
else
    git remote add origin https://github.com/avijit9/avijit9.github.io.git
fi

# Push to main
echo "   Pushing to main branch..."
git push -f origin main

echo ""
echo "✅ Deployment complete!"
echo "   🌐 Site: https://avijit9.github.io/"
echo "   📁 Source/Template: https://github.com/avijit9/avijit9.github.io/tree/source"
echo "   (It may take a few minutes for GitHub Pages to update)"

