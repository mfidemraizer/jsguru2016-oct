Array.prototype.classifyNumbers = () => {
    this.reduce((result, item) => {
        if (item % 2 == 0)
            result.pairs.push(item);
        else
            result.impairs.push(item);

        return result;
    }, {
        pairs: [],
        impairs: []
    })
};

Object.defineProperty(Array.prototype, "isEmpty", {
  get: () => this.length == 0,
  configurable: false
});

var arr = [1, 3, 44];
var x = arr.classifyNumbers();
if(x.isEmpty) {

}

ArrayHelper.average(arr)

var ArrayHelper = {
    average: (arr) => {

    }
};
