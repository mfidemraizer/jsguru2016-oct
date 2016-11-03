class A {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return `${this._name}!`;
    }

    set name(value) {
        this._name = value;
    }
};

var obj = {};
Object.defineProperty(obj, "x", {
    get: () => "hey"
});

var a = new A();
a._name = "hoa";

class B extends A {

}

function C() {}
C.prototype = Object.create(B.prototype);
