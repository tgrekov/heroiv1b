function installServiceWorker() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/heroiv1b/sw.js');
    };
}




installServiceWorker();