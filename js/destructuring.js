var obj = { a: 1, b: "hello", c: true };
var { a = true , b, c } = obj;

var [d, e] = [1, 2];
var [f,,,g] = [1, 2, 3, 4];

function doStuff({ text = "10", timeout = -1 }) {
  console.log(text);
}

doStuff({ text: "hello", timeout: 3000 });
