function BasicPerson(name, age) {
  this.name = name;
  this.age = age;
}

BasicPerson.prototype = {
  doStuff: function() {
      console.log("Do work");
  }
};

function EnhancedPerson(firstName, age, secondName) {
  BasicPerson.apply(this, arguments); /* simulacion de super() */
  this.text = secondName;
}

EnhancedPerson.prototype = Object.create(BasicPerson.prototype);

EnhancedPerson.prototype.doStuff = function() {/* simulacion de super.doStuff() */
  BasicPerson.prototype.doStuff.call(this); /* this en este contexto es la instancia de B*/
  console.log("Do more work");
}
