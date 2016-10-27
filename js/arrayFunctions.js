var persons = ["matias", "yosbel", "perico de los palotes"];

// Da true si hay una ocurrencia de la condición
var arePersonsWithM = persons.some(name => name.toLowerCase().includes("m"));
var isMatias = persons.indexOf("matias") > -1;

var allContainsA = persons.every(name => name.toLowerCase().includes("a"));

// Proyecta cada item de un array en otra cosa
var personsAsObjects = persons.map(name => ({ name: name }));
var isMatiasAsObject = personsAsObjects.indexOf(personsAsObjects[0]) > -1;

var totals = persons.map(name => name.toLowerCase()).reduce((result, item) => {
    if(item.includes("m"))
        result.totalPersonsWithM++;
    else if(item.includes("o"))
        result.totalPersonsWithO++;

    return result;
}, { totalPersonsWithM: 0, totalPersonsWithO: 0 });

var personsWithS = persons.filter(name => name.toLowerCase().includes("s"));

// A partir del índice 0, bórrame 1 elemento
persons.splice(0, 1);

persons.splice(1, 0, "pepe", "juan", "sandra");
