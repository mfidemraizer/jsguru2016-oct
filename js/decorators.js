function module(name) {
    return function(target) {
        target.module = {
            name
        };
    }
}

function log(ctor, level) {
    ctor.loggable = true;
};

function immutable(param) {
    return function(target, name, descriptor) {
        descriptor.configurable = false;

        Object.defineProperty(target, name, descriptor);
    };
}

class CustomerView {
    constructor() {}

    get name() {
        return "matias";
    }
}
