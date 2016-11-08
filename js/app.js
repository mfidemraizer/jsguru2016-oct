import "./oop.js";
import "./callApplyBind.js";
import "./arrayFunctions.js";

import "./promisePatternImplementation.js";
import "./promiseSample.js";

function A() {
    this.x = 11;
};

A.prototype = {
    doStuff: function() {
        console.log("hey");
    }
};


var instanceOfA = new A();

if (instanceOfA.hasOwnProperty("doStuff")) {

}

if ("doStuff" in instanceOfA) {

}

function Dictionary() {}
Dictionary.prototype = {
    getKey: function(key) {
        return this[key];
    }
};

var dictionary = new Dictionary();
dictionary.clave = 11;

Object.keys(dictionary).forEach(propertyName => {

});

for (var prop in dictionary) {
    if (dictionary.hasOwnProperty(prop)) {

    }
}

// PROTOTYPE CHAIN
instanceOfA.doStuff();

function B() {}
B.prototype = Object.create(A.prototype);

var instanceOfB = new B();
instanceOfB.doStuff();

var A = {
  doStuff() {}
};

var B = Object.create(A);
