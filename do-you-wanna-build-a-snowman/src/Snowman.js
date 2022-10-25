class Snowman {
    constructor(snowmanDeets){
      this.carrots = 1
      this.coal = 2
      this.buttons = snowmanDeets.buttons
      this.snowballs = snowmanDeets.snowballs
      this.magicHat = false
    }
canWearMagicHat (){
  if(this.coal < 2){
    this.magicHat = false
  }
  if(this.coal >= 2){
    this.magicHat = true
  }
}
}

module.exports = Snowman;
