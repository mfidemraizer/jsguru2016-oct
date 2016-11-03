import "./oop.js";
import "./callApplyBind.js";
import "./arrayFunctions.js";
//import "./retos/5.js"
//import "./retos/4.js"
//import "./retos/6.js"
import "./retos/7.js"

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
