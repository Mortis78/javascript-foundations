class Unicorn {
  constructor(name, color) {
    // console.log(name)
    // console.log(color);
    this.name = name
    this.color = color || 'white' ;
    }


  isWhite(){
    if(this.color !== 'white'){
      return false
    }
  }

says(words){
  return '**;* ' + words + ' *;**'
}
}

module.exports = Unicorn;

//1. read the test
//2. ask yourself if its going to fail and why.
//3. run the test
//4. make it pass
