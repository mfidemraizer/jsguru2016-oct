function doStuffAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hey");
            resolve();
        }, 1000);
    });
}

doStuffAsync().then(() => console.log("ok"));

_.findWhere([], { text: "matias" })

function doStuff2Async(callback) {
    setTimeout(() => {
      noseque.next();
    }, 1000);
}

yield doStuff2Async();
