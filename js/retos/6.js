function A() {

}

A.prototype = {
    doStuff: function() {

    }
};

function B() {}
B.prototype = Object.create(A.prototype);
B.prototype.doStuff = undefined;

var b = new B();
b.doStuff();
