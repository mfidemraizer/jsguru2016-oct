function doStuff(x, y) {
    if (this.hasOwnProperty("text"))
        console.log(this.text);
    else
        console.log(this);
}

doStuff();

doStuff.call({
    text: "hello world"
}, 1, true);

doStuff.apply({
    text: "hello world"
}, [1, true]);

var boundDoStuff = doStuff.bind({
    text: "hello world"
});

boundDoStuff(1, true);
