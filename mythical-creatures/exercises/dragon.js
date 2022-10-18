
class Dragon {
  constructor(name,rider){
    console.log(name)
    this.name = name
    this.rider = rider
    this.hungry = true
    this.eatCount = 0
  }
greet(){
  return 'Hi, ' + this.rider + '!'
}
eat(){
  this.eatCount += 1
  if(this.eatCount === 3 && this.hungry === true){

  this.hungry = false

}


// if(this.hungry === true && this.eatCount <2 ){
//
//     this.eatCount += 1
//    }
//    else {
//      this.hungry = false
//    }
//    console.log(this.hungry)
//   }
}

}


//1. read the test
//2. ask yourself if its going to fail and why.
//3. run the test
//4. make it pass



module.exports = Dragon;
