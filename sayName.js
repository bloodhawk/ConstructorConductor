//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  var Person = function(name, age) {
  	this.name = name;
  	this.age = age;
  }


//Now create three instances of Person with data you make up
var aaron = new Person("Aaron", 22);
var sarah = new Person("Sarah", 23);
var adelaide = new Person("Adelaide", 3);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
	alert(this.name);
};
