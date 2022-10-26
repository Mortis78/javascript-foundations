class Magician {
  constructor(magician){
    this.name = ('The Great ' + magician.name)
    this.assistant = magician.assistant
    this.favoriteAccessory = magician.clothing || 'top hat'
    this.confidencePercentage = 10
  }

  performIncantation(magic){
    return `${magic.toUpperCase()}!`
  }

  performTrick(){
    this.confidencePercentage += 10
    if (this.favoriteAccessory === 'top hat'){
      return 'PULL RABBIT FROM TOP HAT'
    }
   if (this.favoriteAccessory === 'cape') {
      return 'PULL DOVE FROM SLEEVE'
    }
  }
  performShowStopper(){
    if(this.confidencePercentage >= 100 && this.assistant === true)
    return 'WOW! The magician totally just sawed that person in half!'
    else {
      return "Oh no, this trick is not ready!"
    }

  }
}
module.exports = Magician
