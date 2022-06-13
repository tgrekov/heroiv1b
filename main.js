function installServiceWorker() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/heroiv1b/sw.js');
    };
}
installServiceWorker();
//93.183.216.160
document.querySelector('#open').addEventListener('click', () => fetch('http://192.168.0.108'));
