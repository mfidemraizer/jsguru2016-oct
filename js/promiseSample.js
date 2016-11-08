import Deferred from "./promisePatternImplementation.js";

function sumAsync(a, b) {
    var deferred = new Deferred();

    setTimeout(() => {
        var result = a + b;

        deferred.resolve(result, 1);
    }, 1000);

    return deferred.promise;
}

var sumPromise = sumAsync(1, 2);
var sumPromise1 = sumAsync(1, 2);
var sumPromise2 = sumAsync(1, 2);
var sumPromise3 = sumAsync(1, 2);
var sumPromise4 = sumAsync(1, 2);

// Todas las operaciones han llamado a resolve o no se llama al then
Promise.all([sumPromise, sumPromise1]).then((r1, r2, r3) => {

});

/*setTimeout(() => {
    sumPromise.then(result => {
        console.log(result);
        debugger;
    });
}, 10000);*>
