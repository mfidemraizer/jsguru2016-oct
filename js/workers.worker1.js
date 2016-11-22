importScripts("script1.js", "script2.js");

this.addEventListener("message", e => {
    var data = JSON.parse(e.data);
    var response = { success: true };

    this.postMessage(JSON.stringify(response));
});
