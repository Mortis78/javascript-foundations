class Vampire {
  constructor(name, pet){

    this.thirsty = true
    this.ouncesDrank = 0
    this.name = name
    this.pet = pet || 'bat';


  }
    drink(){

      if( this.ouncesDrank < 50){
        this.ouncesDrank +=10
      }else {

        return 'I\'m too full to drink anymore!'

      }
      this.thirsty = false
    }
}








module.exports = Vampire
