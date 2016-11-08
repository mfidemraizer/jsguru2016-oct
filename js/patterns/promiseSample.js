import Deferred from "./promisePatternImpl.js";

function sumAsync(a, b) {
    var deferred = new Deferred();

    setTimeout(() => {
        var result = a + b;

        deferred.resolve(result, 1);
    }, 1000);

    return deferred.promise;
}

var sumPromise = sumAsync(1, 2);

setTimeout(() => {
    sumPromise.then(result => {
        console.log(result);
        debugger;
    });
}, 3000);
