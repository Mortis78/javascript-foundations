var Dog = require("./dog.js");

class Person {
  constructor(name,dog) {
    this.name = name
    this.dog = dog

  }
  fillFoodBowl(){
    this.dog.eat()
  }
  throwBall(){
    this.dog.fetchBall()
    return this.dog.name + ' loves playing fetch!'
    }

    introduceNewFriends(newFrind){
      this.dog.friends.push(newFrind.name)
    }
    adoptAPup(dogName, dogAge){
    var newPup = new Dog({ name: dogName, age: dogAge });
    this.dog = newPup
    if(this.Person === undefined){
      this.dog = newPup
    }else{
      return `You can\'t adopt ${dogName}  You already have ${dogName}`
    }

  }
}



module.exports = Person;
