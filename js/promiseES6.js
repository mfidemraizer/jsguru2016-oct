function sumAsync(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x + y), 1000);
    });
}

class Salutator {
    sayHelloAsync(text, callback) {
        setTimeout(callback, 1000);
    }
}

class PromisifiedSalutator {
    constructor() {
        this.salutator = new Salutator();
    }

    sayHelloAsync(text) {
        var that = this;

        return new Promise((resolve, reject) => {
            that.salutator.sayHelloAsync(text, resolve);
        })
    }
}
