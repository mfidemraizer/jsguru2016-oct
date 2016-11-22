var worker1 = new Worker("js/workers.worker1.js");
worker1.postMessage(JSON.stringify({ text: "hello world" }));

worker1.addEventListener("message", e => {
    var response = JSON.parse(e.data);

    document.body.appendChild(document.createTextNode(response.success));
    worker1.terminate();
});

var worker2Code = `
this.addEventListener("message", e => {
    this.postMessage(e.data);
});`;

var code = new Blob([worker2Code]);
var codeUrl = URL.createObjectURL(code);
debugger;
var worker2 = new Worker(codeUrl);
worker2.postMessage("hello world 2");

worker2.addEventListener("message", e => {
    console.log(e.data);
});
