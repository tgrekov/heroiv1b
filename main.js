function installServiceWorker() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/heroiv1b/sw.js');
    };
}
installServiceWorker();
document.querySelector('#open').addEventListener('click', () => fetch('http://127.0.0.1'));