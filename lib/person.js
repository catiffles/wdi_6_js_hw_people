var Person = function(first, last, age, weight, height,friends){
  this.firstName = first;
  this.lastName = last;
  this.age = age || 30;
  this.weight = weight || 150;
  this.height = height || (Math.random() * 18) + 60;
  this.friends = [];
};

Person.prototype = {
  fullName: function(){
    return this.firstName + " " + this.lastName + ".";
  },

  weightInStone: function(){
    var stones = this.weight / 14;
    return this.firstName + "'s weight in stone is " + stones + ".";
  },

  addFriend: function(newfriend){
    this.friends.push(newfriend);
  },

  removeFriend: function(sadfriend){
    this.friends.pop(sadfriend);
  },

  greetPeople: function(){
    if (this.friends.length === 0){
      console.log("Hi! I'm " + this.firstName + " and I have no friends.");
    } else {
      this.friends.forEach(function(person){
        console.log("Hi, " + person.fullName());
      })
    }
  }
};

var richie = new Person("Richie", "Han", 26, 125, 71);
var peggy = new Person("Peggy", "Lee", 26, 105, 63);
var alan = new Person("Alan", "Wong", 27, 180, 74);
var julie = new Person("Julie", "Wu", 25, 125, 64);
var lilian = new Person("Lilian", "Hwang", 26, 105, 64);
var serena = new Person("Serena", "Wu", 25, 120, 63);
var nathan = new Person("Nathan", "Denni", 27, 160, 64);
var vicky = new Person("Vicky", "Shih", 28, 130, 68);
var eric = new Person("Eric", "Bingle", 35, 160, 69);
var janet = new Person("Janet", "Tam", 26, 125, 63);


console.log(richie.fullName());
console.log(richie.weightInStone());

lilian.addFriend(serena);
richie.addFriend(eric);
richie.addFriend(lilian);
richie.addFriend(serena);
richie.addFriend(nathan);
nathan.addFriend(janet);
nathan.addFriend(vicky);

richie.greetPeople();
alan.greetPeople();

richie.removeFriend(nathan);

richie.greetPeople();

