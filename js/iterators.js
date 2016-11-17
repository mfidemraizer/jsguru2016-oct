// ITERATOR PROTOCOL
var txt = "hola";
var obj = {
    names: ["matias", "tomás", "alex"],
    get [Symbol.iterator]() {
        return function() {
            var index = -1;

            return {
                index: -1,
                next: () => {
                    index++;

                    var item = {
                        done: index > this.names.length - 1
                    };

                    if (!item.done)
                        item.value = this.names[index];

                    return item;
                }
            };
        };
    }
};

for (let name of obj) {
    console.log(name);
}
