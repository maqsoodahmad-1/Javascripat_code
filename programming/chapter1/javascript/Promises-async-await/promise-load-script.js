function loadscript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(console.log('Whoops failed'));
        document.head.append(script);
    });
}

let promise = loadscript('https://adodson.com/hello.js/');
promise.then(
    script => console.log(`${script.src} is loaded!`),
    error => console.log(`Error: Failed loading`)
)