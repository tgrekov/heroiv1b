function installServiceWorker() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/heroiv1b/sw.js');
    };
}
installServiceWorker();
document.querySelector('#open').addEventListener('click', () => fetch('http://93.183.216.160'));
