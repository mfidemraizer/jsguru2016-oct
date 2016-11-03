var Base = {};

var obj2 = Object.create(null);

var obj = Object.create(Base, {
    name: { value: "hola", writable: false },
    doStuff: { value: function() {

    }, enumerable: false }
});

obj.name = "jsjs";

Object.defineProperty(obj , "name", { value: "adios", enumerable: false });

for(var prop in obj) {

}

function controller($scope) {
    Object.defineProperty($scope, "calculated", {
       get: function() {
        }
    })
}
