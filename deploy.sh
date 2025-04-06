#!/bin/bash

# Deployment script for portfolio project

echo "Starting deployment process..."

# Pull latest changes from git
echo "Pulling latest changes from git..."
git pull

# Install frontend dependencies
echo "Installing frontend dependencies..."
npm install

# Build frontend
echo "Building frontend..."
npm run build

# Install backend dependencies
echo "Installing backend dependencies..."
cd server
npm install
cd ..

# Restart PM2 processes
echo "Restarting PM2 processes..."
pm2 restart ecosystem.config.js

echo "Deployment completed successfully!" 