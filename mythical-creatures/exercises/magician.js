class Magician {
  constructor(magician){
    this.name = ('The Great ' + magician.name)
    this.assistant = magician.assistant
    this.favoriteAccessory = magician.clothing || 'top hat'
  }

  performIncantation(magic){
    return `${magic.toUpperCase()}!`
  }

  performTrick(){
    return 'PULL RABBIT FROM TOP HAT'
  }

}




module.exports = Magician
