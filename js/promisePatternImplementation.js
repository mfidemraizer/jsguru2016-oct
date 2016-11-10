export default class Deferred {
    constructor() {
        this.promises = [];
        this.completed = false;
        this.completedSuccessfully = false;
        this.args = null;
    }

    // ...args => Spread operator
    resolve(...args) {
        if (!this.completed) {
            this.promises.forEach(promise => {
                promise.handlers.filter(h => h.hasOwnProperty("success"))
                    .forEach(handlerMap => {
                        handlerMap.success.apply(promise, args);
                    });
            });

            this.args = Object.freeze(args);
            this.completed = true;
            this.completedSuccessfully = true;
        }
    }

    reject(...args) {
        if (!this.completed) {
            this.promises.forEach(promise => {
                promise.handlers.filter(h => h.hasOwnProperty("reject"))
                    .forEach(handlerMap => {
                        handlerMap.reject.apply(promise, args);
                    });
            });

            this.completed = true;
            this.args = Object.freeze(args);
        }
    }

    get promise() {
        var promise = new Promise(this);
        this.promises.push(promise);

        return promise;
    }
}

class Promise {
    constructor(deferred) {
        this.deferred = deferred;
        this.handlers = [];
    }

    static race(...promises) {
        var deferred = new Deferred();
        var results = [];

        promises.forEach(promise => {
            var reject = false;

            promise.then((...args) => {
                if (!deferred.completed)
                    deferred.resolve.apply(promise, args);
            });
        });
    }

    static all(...promises) {
        var deferred = new Deferred();
        var results = [];

        promises.forEach(promise => {
            var reject = false;

            promise.then((...args) => {
              
                results.push(args);

                if (results.length == promises.length)
                    deferred.resolve.apply(this, results);
            }, () => {
                reject = true;
            });
        });
    }

    always(handler) {
        return this.then(
            (...args) => handler.apply(this, args),
            (...args) => handler.apply(this, args)
        );
    }

    then(successHandler, rejectHandler) {
        var hasSuccessHandler = typeof successHandler == "function";
        var hasRejectHandler = typeof rejectHandler == "function";

        if (!hasSuccessHandler && !hasRejectHandler)
            throw Error("Where the fuck are the handlers?");

        var handlerMap = {};

        if (hasSuccessHandler)
            handlerMap.success = successHandler;

        if (hasRejectHandler)
            handlerMap.reject = rejectHandler;

        if (!this.deferred.completed)
            this.handlers.push(handlerMap);
        else if (this.deferred.completedSuccessfully)
            successHandler.apply(this, this.deferred.args);
        else
            rejectHandler.apply(this, this.deferred.args);

        return this;
    }

    fail(handler) {
        return this.then(null, handler);
    }
}
