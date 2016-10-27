class A {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return `${this._name}!`;
    }
    set name() {
      this._name = value;
    }
}

var a = new A();

class B extends A {

}
