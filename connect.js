document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('connectWalletButton');

    async function connectWallet() {
        if (window.ethereum) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

                // Check if accounts are available
                if (accounts.length > 0) {
                    const account = accounts[0];
                    console.log('Connected account:', account);

                    // Save wallet address in localStorage
                    localStorage.setItem('walletAddress', account);
                    console.log('Wallet address saved to localStorage:', account);

                    // Redirect to dashboard
                    window.location.href = 'dashboard.html';
                } else {
                    console.log('No accounts found');
                }
            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
                alert('Error connecting to MetaMask: ' + error.message);
            }
        } else {
            alert('MetaMask is not installed. Please install MetaMask to connect your wallet.');
        }
    }

    // Add event listener to the connect button
    if (connectButton) {
        connectButton.addEventListener('click', connectWallet);
    } else {
        console.error('Connect Wallet button not found.');
    }
});
