var obj = {
    _name: "",
    _secondName: "",

    get name() {
        return this._name.toLowerCase();
    }

    set name(value) {
        this._name = value;
    }

    get secondName() {
        return this._secondName.toLowerCase();
    }

    set secondName(value) {
        this._secondName = value;
    }
};

function doStuff(args) {
    Object.defineProperty(args, "fullName", {
        get: function() {
            return `${this.name} ${this.secondName}`;
        },
        configurable: false,
        enumerable: false
    });

}

doStuff(obj);
Object.defineProperty(obj, "x", {
    value: 11,
    writable: false
});
