
class Hobbit {
  constructor(objectHobbit){
    this.name = objectHobbit.name
    this.age = 0
    this.adult = false
    this.hasRing = false
    this.old = false
  }

    celebrateBirthday(){
      return this.age++
    }

    timeTravel(age,name){
    if
    (this.age === 32) {
      this.adult = false
}

    if(this.age === 33) {
      this.adult = true
    }

    if(this.age >= 101) {
      this.adult = false
    }
}
}



module.exports = Hobbit
