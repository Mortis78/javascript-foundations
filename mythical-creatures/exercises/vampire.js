class Vampire {
  constructor(name, pet){

    this.thirsty = true
    this.ouncesDrank = 0
    this.name = name

    if(pet === undefined){
      this.pet = 'bat';
    }else {
      this.pet = pet
    }
  }
    drink(){
      this.ouncesDrank +=10
      if( this.thirsty = false && this.ouncesDrank < 50 ){
    }else {
      this.thirsty = false
    }
    }

}








module.exports = Vampire
