import {
    PubSub,
    symbols
} from "./pubsub.js"

class ObservableObject {
    static create(obj) {
        var pubSub = new PubSub();
        obj[symbols.pubsub] = pubSub;

        Object.keys(obj).forEach(property => {
            obj[`_${property}`] = obj[property];

            Object.defineProperty(obj, property, {
                get: () => this[`_${property}`],
                set: (value) => {
                    pubSub.publish(
                        "", {
                            property: property,
                            oldValue: this[`_${property}`],
                            newValue: value
                        });

                    this[`_${property}`] = value;
                }
            });
        });

        obj.watchChanges = handler => pubSub.subscribe(
            "",
            (channel, message) => handler(message)
        );

        return obj;
    }
}

var obj = {
    name: "hola"
};

ObservableObject.create(obj);
obj.watchChanges(change => {
    debugger;
});
obj.name = "pepe";
