//Program to understand the concept of callback and asynchroneous
function loadscript(src, callback) {
   let script = document.createElement('script');
   script.src = src;
   script.onload = () => callback(null,script);
   script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
   }
loadscript('https://adodson.com/hello.js/', function(error, script) {
   if (error) {
      alert('Loading of script failed');
   } else {
      alert('script loaded successfully');
   }
})