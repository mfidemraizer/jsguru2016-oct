var persons = [
    { name: "Matías", age: 31 },
    { name: "Pepito", age: 198 },
    { name: "Juana", age: 15 }
];

persons.filter(person => person.name.includes("a")); //Muy lento para 1500 elementos

var indexableArray = Object.create(Array.prototype);
indexableArray.index = {
  "contains:a": new Set()
};

indexableArray.push = (item) => {
    Array.prototype.push.call(this, item);

    if (item.name.toLowerCase().includes("a"))
      this.index["contains:a"].add(item);
};

var concreteIndex = Object.create(indexableArray);
concreteIndex.push({
    name: "Matías",
    age: 31
});

concreteIndex.index["contains:a"];
