class Dog {
  constructor(dogDetails) {
    this.name = dogDetails.name
    this.age = dogDetails.age
    this.energyLevel = 5
    this.hungry = true
    this.friends = []

  }
  eat(){
   if(this.hungry === false){
    return 'I refuse to eat.'
   }else{
    this.hungry = false
    return'Yum!'
   }
  }
   fetchBall(){
   if(this.energyLevel > 3){
    this.energyLevel -=1
    return 'This is fun!'
    }
    return 'Nah, I\'m going to sleep instead.'
  }
  sleep(){
    if(this.energyLevel < 10){
      this.energyLevel += 1
    }else{
      return 'I have too much energy to rest. I\'m going to chew something instead.'
    }
    
  }

  makeNewFriend(dog){
    this.friends.push(dog.name)
  }

  
    
  }


module.exports = Dog;
