// symbols.js
var symbol1 = Symbol("hola");

// app.js
//import symbol from "symbols.js"
var obj = {};
obj.hola = "adios";
obj[symbol1] = 11;

var value = obj[symbol1];

class StringHelper {
    toLower(text) {
        if("lowerCaseEx" in this)
            text = this.lowerCaseEx(text);

        return text.toLowerCase();
    }
}

StringHelper.prototype.lowerCaseEx = text => {
    return "-" + text;
}

var obj = {
    get [Symbol.toStringTag]() {
        return JSON.stringify(this);
    }
};

console.log(obj);
