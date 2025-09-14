#!/bin/bash

# RootCause SAST Tool Professional Installer
# https://rootcause.sh
# Version: 2.0.0

set -euo pipefail

# =============================================================================
# CONFIGURATION
# =============================================================================

readonly SCRIPT_NAME="RootCause Installer"
readonly SCRIPT_VERSION="2.0.0"
readonly SCANNER_REPO="https://github.com/rootcausescan/scanner.git"
readonly RULES_REPO="https://github.com/rootcausescan/rules"
readonly INSTALL_PATH="$HOME/.local/bin"
readonly CONFIG_DIR="$HOME/.config/rootcause"

# Minimum required versions
readonly MIN_RUST_VERSION="1.70.0"
readonly MIN_CARGO_VERSION="1.70.0"

# Colors for output
readonly RED='\033[0;31m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly BLUE='\033[0;34m'
readonly PURPLE='\033[0;35m'
readonly CYAN='\033[0;36m'
readonly BOLD='\033[1m'
readonly NC='\033[0m' # No Color

# Icons
readonly ICON_SUCCESS="✅"
readonly ICON_ERROR="❌"
readonly ICON_WARNING="⚠️"
readonly ICON_INFO="ℹ️"
readonly ICON_DEBUG="🔍"
readonly ICON_PROGRESS="⏳"

# =============================================================================
# UTILITY FUNCTIONS
# =============================================================================

# Logging functions
log_info() { echo -e "${BLUE}${ICON_INFO} [INFO]${NC} $*"; }
log_warn() { echo -e "${YELLOW}${ICON_WARNING} [WARN]${NC} $*"; }
log_error() { echo -e "${RED}${ICON_ERROR} [ERROR]${NC} $*" >&2; }
log_debug() { echo -e "${PURPLE}${ICON_DEBUG} [DEBUG]${NC} $*"; }
show_progress() { echo -e "${CYAN}${ICON_PROGRESS} $*${NC}"; }
show_success() { echo -e "${GREEN}${ICON_SUCCESS} $*${NC}"; }

# Print header
print_header() {
    echo -e "${BOLD}${BLUE}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                      RootCause Scanner                       ║"
    echo "║                          Installer                           ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

# Print configuration
print_config() {
    echo -e "${BOLD}${CYAN}Configuration:${NC}"
    echo "  📦 Scanner repository: $SCANNER_REPO"
    echo "  📋 Rules repository: $RULES_REPO"
    echo "  📁 Install path: $INSTALL_PATH"
    echo ""
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check version comparison
version_compare() {
    local version1="$1"
    local version2="$2"
    
    if [[ "$version1" == "$version2" ]]; then
        return 0
    fi
    
    local IFS=.
    local i ver1=($version1) ver2=($version2)
    
    # Pad shorter version with zeros
    for ((i=${#ver1[@]}; i<${#ver2[@]}; i++)); do
        ver1[i]=0
    done
    
    for ((i=0; i<${#ver1[@]}; i++)); do
        if [[ -z ${ver2[i]} ]]; then
            ver2[i]=0
        fi
        
        if ((10#${ver1[i]} > 10#${ver2[i]})); then
            return 0  # version1 is greater
        fi
        
        if ((10#${ver1[i]} < 10#${ver2[i]})); then
            return 1  # version1 is smaller
        fi
    done
    
    return 0  # versions are equal
}

# Extract version from command output
extract_version() {
    local cmd="$1"
    local version_pattern="$2"
    
    if ! command_exists "$cmd"; then
        return 1
    fi
    
    local output
    output=$($cmd --version 2>/dev/null || $cmd -V 2>/dev/null || echo "")
    
    if [[ -n "$output" ]]; then
        echo "$output" | grep -oE "$version_pattern" | head -1
    else
        return 1
    fi
}

# =============================================================================
# VALIDATION FUNCTIONS
# =============================================================================

# Check dependencies
check_dependencies() {
    log_info "Checking dependencies..."
    
    # Check Git
    if ! command_exists git; then
        log_error "Git is required but not installed. Please install Git first."
        exit 1
    fi
    
    # Check Rust/Cargo
    if ! command_exists cargo; then
        log_error "Rust/Cargo is required but not installed. Please install Rust first."
        echo -e "${BLUE}Visit: https://rustup.rs/${NC}"
        exit 1
    fi
    
    local rust_version cargo_version
    rust_version=$(extract_version rustc "[0-9]+\.[0-9]+\.[0-9]+")
    cargo_version=$(extract_version cargo "[0-9]+\.[0-9]+\.[0-9]+")
    
    log_debug "Rust version: $rust_version"
    log_debug "Cargo version: $cargo_version"
    
    # Check minimum versions
    if [[ -n "$rust_version" ]]; then
        if version_compare "$rust_version" "$MIN_RUST_VERSION"; then
            log_debug "Rust version meets requirements"
        else
            log_error "Rust version $rust_version is below minimum required version $MIN_RUST_VERSION" 4
            exit 1
        fi
    fi
    
    if [[ -n "$cargo_version" ]]; then
        if version_compare "$cargo_version" "$MIN_CARGO_VERSION"; then
            log_debug "Cargo version meets requirements"
        else
            log_error "Cargo version $cargo_version is below minimum required version $MIN_CARGO_VERSION" 5
            exit 1
        fi
    fi
}

# Check existing installation
check_existing_installation() {
    log_info "Checking for existing installation..."
    
    if command_exists rootcause; then
        local existing_version
        existing_version=$(rootcause --version 2>/dev/null | grep -oE "[0-9]+\.[0-9]+\.[0-9]+" | head -1 || echo "unknown")
        log_warn "RootCause is already installed (version: $existing_version)"
        
         # Ask user if they want to update
         echo -e "${YELLOW}Do you want to update to the latest version? [y/N]${NC}"
         read -r response
         if [[ ! "$response" =~ ^[Yy]$ ]]; then
             log_info "Installation cancelled by user"
             exit 0
         fi
        
        log_info "Proceeding with update..."
    else
        log_debug "No existing installation found"
    fi
}

# =============================================================================
# INSTALLATION FUNCTIONS
# =============================================================================

# Create necessary directories
create_directories() {
    log_info "Creating directories..."
    
    local dirs=("$INSTALL_PATH" "$CONFIG_DIR")
    
    for dir in "${dirs[@]}"; do
        if [[ ! -d "$dir" ]]; then
            log_debug "Creating directory: $dir"
            mkdir -p "$dir" || log_error "Failed to create directory: $dir"
        else
            log_debug "Directory already exists: $dir"
        fi
    done
}

# Clone and build
clone_and_build() {
    log_info "Cloning and building RootCause..."
    
    # Create temporary directory
    local temp_dir
    temp_dir=$(mktemp -d -t rootcause-install-XXXXXX)
    
    # Set up cleanup trap
    trap "rm -rf '$temp_dir'" EXIT INT TERM
    
    # Clone repository
    show_progress "Cloning RootCause repository..."
    git clone --depth 1 "$SCANNER_REPO" "$temp_dir"
    
    cd "$temp_dir"
    
    # Build the binary
    show_progress "Building RootCause binary (this may take a few minutes)..."
    cargo build -p rootcause --release --quiet
    
    # Install binary
    show_progress "Installing binary to $INSTALL_PATH..."
    cp target/release/rootcause "$INSTALL_PATH/"
    chmod +x "$INSTALL_PATH/rootcause"
    
    show_success "Binary installed successfully"
}

# Install default rules
install_default_rules() {
    log_info "Installing default rules..."
    
    show_progress "Installing official ruleset..."
    if ! rootcause rules install "$RULES_REPO" -n Official; then
        log_warn "Failed to install default rules. You can install them later with:"
        log_warn "  rootcause rules install $RULES_REPO -n Official"
        exit 1
    fi
    
    show_success "Default rules installed successfully"
}

# Verify installation
verify_installation() {
    log_info "Verifying installation..."
    
    # Test basic functionality
    show_progress "Testing basic functionality..."
    if ! "$INSTALL_PATH/rootcause" --version >/dev/null 2>&1; then
        log_error "Installed binary is not working correctly"
        log_warn "Please check the installation and try again"
        exit 1
    fi
    
    local installed_version
    installed_version=$("$INSTALL_PATH/rootcause" --version 2>/dev/null | grep -oE "[0-9]+\.[0-9]+\.[0-9]+" | head -1 || echo "unknown")
    
    show_success "Installation verified successfully (version: $installed_version)"
}

# =============================================================================
# POST-INSTALLATION
# =============================================================================

# Check PATH configuration
check_path_configuration() {
    if [[ ":$PATH:" != *":$INSTALL_PATH:"* ]]; then
        log_warn "$INSTALL_PATH is not in your PATH"
        
        # Detect shell
        local shell_config
        case "$SHELL" in
            */bash) shell_config="$HOME/.bashrc" ;;
            */zsh) shell_config="$HOME/.zshrc" ;;
            */fish) shell_config="$HOME/.config/fish/config.fish" ;;
            *) shell_config="$HOME/.profile" ;;
        esac
        
        echo -e "${YELLOW}⚠️  PATH Configuration Required${NC}"
        echo -e "${BLUE}Add this line to your shell configuration:${NC}"
        echo -e "${BOLD}  export PATH=\"\$PATH:$INSTALL_PATH\"${NC}"
        echo -e "${BLUE}For your current shell ($SHELL), add it to:${NC}"
        echo -e "${BOLD}  $shell_config${NC}"
    else
        show_success "PATH configuration is correct"
    fi
}

# Show usage information
show_usage_info() {
    echo ""
    echo -e "${BOLD}${GREEN}🎉 Installation Complete!${NC}"
    echo ""
    echo -e "${BOLD}${BLUE}Usage Examples:${NC}"
    echo "  rootcause scan ./src                    # Scan source directory"
    echo "  rootcause scan . --format json          # Scan with JSON output"
    echo "  rootcause rules list                    # List installed rules"
    echo "  rootcause rules install <url> -n <name> # Install custom rules"
    echo ""
    echo -e "${BOLD}${BLUE}Documentation:${NC}"
    echo "  📖 https://docs.rootcause.sh"
    echo "  🐙 https://github.com/RootCauseScan/scanner"
    echo ""
}

# =============================================================================
# MAIN INSTALLATION FLOW
# =============================================================================

main() {
    # Print header
    print_header
    print_config
    
    # Main installation steps
    check_dependencies
    check_existing_installation
    create_directories
    clone_and_build
    install_default_rules
    verify_installation
    check_path_configuration
    show_usage_info
    
    # Final success message
    echo ""
    show_success "RootCause has been installed successfully!"
}

# =============================================================================
# SCRIPT EXECUTION
# =============================================================================

# Run main installation
main