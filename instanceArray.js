/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/
var users = [];

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
  users.push(this);
}

//Create an Array called 'users' that will store all our instances of User.



//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  var Tyler = new User("Tyler", "tylermcginnis33@gmail.com", 'iLoveJS');
  var Cahlan = new User("Cahlan", 'cahlan@devmounta.in', 'iLoveHashtags');
  var Lenny = new User("Lenny", "lenny@theLenster.com", 'iLoveLentilSoup');
  User.prototype.info = function() {
    for(prop in this) {
      if (this.hasOwnProperty(prop)) {
      console.log(this[prop]);
      }
    }  
  };
console.log('Tyler\'s information is ');
//Console.log all of Tylers information
Tyler.info();

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information
Lenny.info();

//Now create another instance of User using your own information and then add that to your users array.
var Aaron = new User("Aaron", "aaronrumery@gmail.com", "foobar");
users.push(Aaron);
console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 
for(var i = 0; i<users.length; i++) {
  console.log(users[i].name);
}
  //code here