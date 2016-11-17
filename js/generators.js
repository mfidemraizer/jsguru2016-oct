var obj = {
    names: ["matias", "tomás", "alex"],
    [Symbol.iterator]: function*() {
        yield* this.names;
    }
};

var _ = {
    flatten: (...args) => {
        return {
            [Symbol.iterator]: function*() {
                for (let i = 0; i < args.length; i++)
                    yield* args[i];
            }
        };
    },
    where: (iterable, conditionFunc) => {
        return {
            [Symbol.iterator]: function*() {
                for (let item of iterable) {
                    if (conditionFunc(item)) {
                        yield item;
                    }
                }
            }
        };
    }
};

var names = ["matías", "yosvel", "tomás", "álex"];
var hasM = _.where(names, name => name.includes("m"));
debugger;
for(let name of hasM) {
    console.log(name);
}

debugger;

for (let name of _.flatten(["matías", "yosvel"], ["tomás"], ["álex"])) {
    console.log(name);
}

debugger;
/*for (let name of obj) {
    console.log(name);
}*/
