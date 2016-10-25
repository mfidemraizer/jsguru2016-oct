import "./oop.js";

function A() {
  this.x = 11;
};

A.prototype = {
    doStuff : function() {
      console.log("hey");
    }
};

var instanceOfA = new A();

//PROTOTYPE CHAIN
instanceOfA.doStuff();

function B() {};
B.prototype = Object.create(A.prototype);

var instanceOfB = new B();
instanceOfB.doStuff();
