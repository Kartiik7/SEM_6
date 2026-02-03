#!/bin/bash

# Multi-Experiment Deployment Script
# Usage: ./deploy.sh <experiment_folder_name> [roll_number]
# Example: ./deploy.sh exp2 23BAI70520

EXPERIMENT=$1
ROLL_NO=${2:-23BAI70520} # Default roll number if not provided

if [ -z "$EXPERIMENT" ]; then
  echo "Error: Experiment name is required."
  echo "Usage: ./deploy.sh <experiment_folder_name> [roll_number]"
  exit 1
fi

REPO_ROOT=$(pwd)
SOURCE_DIR="$REPO_ROOT/react-experiments/$EXPERIMENT"
TARGET_DIR_NAME="${EXPERIMENT}_${ROLL_NO}"
TARGET_DIR="$REPO_ROOT/$TARGET_DIR_NAME"

# Check if experiment exists
if [ ! -d "$SOURCE_DIR" ]; then
  echo "Error: Experiment directory '$SOURCE_DIR' not found."
  exit 1
fi

echo "=========================================="
echo "Deploying $EXPERIMENT to $TARGET_DIR_NAME"
echo "=========================================="

# 1. Build the Experiment
cd "$SOURCE_DIR" || exit

# Dynamic Base Path for Vite
# We pass the base path via environment variable or command line argument if the vite config supports it.
# However, modifying vite.config.js is more reliable. 
# We will assume vite.config.js reads from process.env.BASE_URL or we just rebuild with the flag if possible.
# Vite supports `base` flag in build command.

echo "Installing dependencies..."
npm install

echo "Building project with base path /SEM_6/$TARGET_DIR_NAME/ ..."
# This overrides the base path in vite.config.js
npm run build -- --base=/SEM_6/$TARGET_DIR_NAME/

if [ $? -ne 0 ]; then
    echo "Build failed. Exiting."
    exit 1
fi

# 2. Move Build Output
cd "$REPO_ROOT" || exit

# Create/Clean target directory
if [ -d "$TARGET_DIR" ]; then
    echo "Cleaning existing target directory..."
    rm -rf "$TARGET_DIR"
fi
mkdir -p "$TARGET_DIR"

echo "Copying build artifacts..."
# Vite output is usually dist/
cp -r "$SOURCE_DIR/dist/"* "$TARGET_DIR/"

# 3. Commit and Push
echo "Staging changes..."
git add "$TARGET_DIR_NAME"

echo "Committing..."
git commit -m "Deploy $EXPERIMENT to $TARGET_DIR_NAME"

echo "Pushing to remote..."
git push origin main

echo "=========================================="
echo "Deployment Complete!"
echo "URL: https://Kartiik7.github.io/SEM_6/$TARGET_DIR_NAME/"
echo "=========================================="
