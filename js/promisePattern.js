function doStuffAsync(a, b, callback) {
    setTimeout(() => callback(a + b), 1000);
}

function doStuff2Async(a, b, callback) {
    setTimeout(() => callback(a + b), 1000);
}

function doStuff3Async(a, b, callback) {
    setTimeout(() => callback(a + b), 1000);
}

doStuffAsync(1, 2, result => {
    console.log(result);

    doStuff2Aysnc(3, 4, result2 => {
        doStuff3Async(10, 20, result3 => {

        });
    });
});

doStuffAsync(1, 2).then(result => {
  doStuff2Async(1, 2).then(result => {
    doStuff3Async(1, 2).then(result => {

    });
  });
});

Promise.all([doStuffAsync(2, 1), doStuff2Async(4, 5)]).then((r1, r2) => {

}, () => {
  
});

// FIRE AND FORGET
console.log("hello");
