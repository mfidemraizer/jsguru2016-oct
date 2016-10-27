function BasicPerson(name, age) {
    this.name = name;
    this.age = age;
}

BasicPerson.prototype = {
    doStuff: function() {
        console.log("Do work");
    }
};

function EnhancedPerson(firstName, age, secondName) {
    if (arguments.length >= 2) {
        if(typeof age == "undefined") {
            var args = [firstName, 1];
            BasicPerson.apply(this, args);
        }

        BasicPerson.apply(this, arguments);
    }

    this.secondName = secondName;
}

EnhancedPerson.prototype = Object.create(BasicPerson.prototype);

EnhancedPerson.prototype.doStuff = function() {
    BasicPerson.prototype.doStuff.apply(this, arguments);
    console.log("Do more work");
};

var b = new B();
b.doStuff();
