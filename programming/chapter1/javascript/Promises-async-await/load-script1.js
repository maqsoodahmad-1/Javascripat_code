function loadscript(src,callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
  }
loadscript('https://adodson.com/hello.js/', script => {
 alert(`Cool, the ${script.src} is loaded`);
 alert( _ );//function declared in the loaded script
});
