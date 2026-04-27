import { createWalletClient,custom } from 'https://esm.sh/viem';

const connectButton = document.getElementById('connectButton');
let walletClient

function connect() {
    if (typeof window.ethereum !== undefined) {
        walletClient = createWalletClient({
            transport: custom(window.ethereum),
        })

        walletClient.requestAddresses()
    } else {
        console.log('Please install MetaMask!');
    }
};

connectButton.onclick = connect
