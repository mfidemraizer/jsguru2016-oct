function logWords(words) {
  //console.log(words.join(" "));
  console.log(Array.from(arguments).join(" "));
}

function logName(name, secondName) {
  //logWords([name, secondName]);
  logWords.apply(this, arguments);
}
