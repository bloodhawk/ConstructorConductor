var users = [];
var questions = [];

  var User = function(name, email, password, totalScore) {
  	this.name = name;
  	this.email = email;
  	this.password = password;
  	this.totalScore = totalScore;
  	users.push(this);
  }

  var Question = function(title, answersArray,rightAnswer) {
  	this.title = title;
  	this.answersArray = answersArray;
  	this.rightAnswer = rightAnswer;
  	questions.push(this);
  }

  var aaron = new User("Aaron", "aaronrumery@gmail.com","awesomeP@SS", 0);
  var sarah = new User("Sarah", "rumery.sarah@gmail.com","awesomeP@SS", 0);
  var adelaide = new User("Adelaide", "addy@gmail.com","awesomeP@SS", 0);


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  var q1 = new Question("Inheritance", ['T','F'], 'T');
  var q2 = new Question("Java", ['T','F'], 'T');
  var q3 = new Question("Type coercion", ['T','F'], 'T');

console.log('My users Array and my questions array are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.
	for (var i = 0; i < users.length; i++) {
		console.log(users[i]);
	}
	for (var i = 0; i < questions.length; i++) {
		console.log(questions[i]);
	};