 var persons = [{
     name: "Matías",
     age: 31
 }, {
     name: "Pepito",
     age: 198
 }, {
     name: "Juana",
     age: 15
 }];

 persons.filter(person => person.name.includes("a"));

 var IndexableArray = Object.create(Array.prototype);
 IndexableArray.index = {
     "startswith:a": new Set()
 }

 IndexableArray.rebuild = () => {
   this.index = {};
    var that = this;
    this.forEach(item => {
        that.push(item);
    });
 }

 IndexableArray.push = (item) => {
     Array.prototype.push.call(this, item);

     if (item.name.toLowerCase().includes("a"))
         this.index["containsa:a"].add(item);

     if (item.age > 40)
         this.index["morethan40"].add(item);
 };

 var concreteIndex = Object.create(IndexableArray);
 concreteIndex.push({
     name: "Matías",
     age: 31
 });

 concreteIndex.index["containsa:a"]
