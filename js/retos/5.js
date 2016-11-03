function logWords() {
  debugger;
    console.log(Array.from(arguments).join(" "));
}

function logName(name, secondName) {
    logWords.apply(this, arguments);
}

logName("hola", "adios");
