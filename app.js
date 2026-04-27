const btnConnect = document.getElementById("btnConnect");
const btnBuyCoffee = document.getElementById("btnBuyCoffee");
const btnGetBalance = document.getElementById("btnGetBalance");
const btnWithdraw = document.getElementById("btnWithdraw");

const walletAddress = document.getElementById("walletAddress");
const contractBalance = document.getElementById("contractBalance");
const statusEl = document.getElementById("status");

function setStatus(msg) {
    statusEl.textContent = msg;
}

btnConnect?.addEventListener("click", async () => {
    setStatus("Connect clicked. Wire this to wallet connect logic.");
    // TODO: connect wallet + set walletAddress.textContent
});

btnBuyCoffee?.addEventListener("click", async () => {
    setStatus("Buy Coffee clicked. Wire this to contract buyCoffee function.");
});

btnGetBalance?.addEventListener("click", async () => {
    setStatus("Get Balance clicked. Wire this to contract balance call.");
    // TODO: contractBalance.textContent = ...
});

btnWithdraw?.addEventListener("click", async () => {
    setStatus("Withdraw clicked. Wire this to contract withdraw function.");
});