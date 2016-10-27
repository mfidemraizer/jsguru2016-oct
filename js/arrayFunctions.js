var persons = ["matias", "yosbel" , "perico de los palotes"];

//Retorna true si hay una ocurrencia de la condicion
var arePersonsWithM = persons.some(name => name.toLowerCase().includes("m"));
//var personsWithM = persons.some(function (name) { return name.toLowerCase().includes("m"); });

var isMatias = persons.indexOf("matias") > -1;

// Retorna true si todos los elementos tienen una a
var allContainsA = persons.every(name => name.toLowerCase().includes("a"));

//Proyecta cada item de un array en otra cosa
var personsAsObjects = persons.map(name => ( { name: name} ));
//var personsAsObjects = persons.map(name => { return { name: name}; });

var totals =  persons.map(name => name.toLowerCase())
                     .reduce((result, item) => {
                        if(item.includes("m"))
                          result.totalPersonsWithM++;
                        else if(item.includes("o"))
                          result.totalPersonsWithO++;

                        return result;
                     }, { totalPersonsWithM: 0, totalPersonsWithO: 0 });

var personsWithS = persons.filter(name => name.includes("s"));

// A partir del indice 0, borrar 1 elemento
persons.splice(0, 1);

// Inserta los elementos en la posicion 1
persons.splice(1, 0, "pepe", "juan", "sandra");
