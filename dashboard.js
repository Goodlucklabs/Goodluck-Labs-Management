// dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve wallet address from localStorage
    const walletAddress = localStorage.getItem('walletAddress');
    console.log('Retrieved wallet address from localStorage:', walletAddress);
    
    if (walletAddress) {
        // Truncate wallet address (e.g., first 6 and last 4 characters)
        const truncatedAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;
        document.getElementById('walletAddress').textContent = truncatedAddress;
    } else {
        console.error('No wallet address found in localStorage');
        document.getElementById('walletAddress').textContent = 'No wallet address found';
    }
});
