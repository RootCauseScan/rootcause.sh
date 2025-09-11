#!/bin/bash

# RootCause SAST Tool Installer
# https://rootcause.sh

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Detect OS and architecture
OS=$(uname -s | tr '[:upper:]' '[:lower:]')
ARCH=$(uname -m)

case $ARCH in
    x86_64) ARCH="x64" ;;
    arm64|aarch64) ARCH="arm64" ;;
    *) echo -e "${RED}Unsupported architecture: $ARCH${NC}" && exit 1 ;;
esac

echo -e "${BLUE}🐾 RootCause SAST Tool Installer${NC}"
echo -e "${BLUE}================================${NC}"
echo ""

# Check if rootcause is already installed
if command -v rootcause &> /dev/null; then
    echo -e "${YELLOW}RootCause is already installed. Updating...${NC}"
fi

# Download URL
DOWNLOAD_URL="https://github.com/RootCauseScan/scanner/releases/latest/download/rootcause-${OS}-${ARCH}"

echo -e "${BLUE}Downloading RootCause for ${OS}-${ARCH}...${NC}"

# Create temp directory
TEMP_DIR=$(mktemp -d)
cd "$TEMP_DIR"

# Download binary
if command -v curl &> /dev/null; then
    curl -L -o rootcause "$DOWNLOAD_URL"
elif command -v wget &> /dev/null; then
    wget -O rootcause "$DOWNLOAD_URL"
else
    echo -e "${RED}Neither curl nor wget found. Please install one of them.${NC}"
    exit 1
fi

# Make executable
chmod +x rootcause

# Install to /usr/local/bin (requires sudo)
echo -e "${BLUE}Installing to /usr/local/bin...${NC}"
sudo mv rootcause /usr/local/bin/

# Cleanup
cd /
rm -rf "$TEMP_DIR"

echo ""
echo -e "${GREEN}✅ RootCause installed successfully!${NC}"
echo ""
echo -e "${BLUE}Usage:${NC}"
echo "  rootcause ./src"
echo "  rootcause . --rules ./rules/"
echo ""
echo -e "${BLUE}Documentation:${NC} https://docs.rootcause.sh"
echo -e "${BLUE}GitHub:${NC} https://github.com/RootCauseScan/scanner"
echo ""
