var Person = require('./person');
var Statue = require('./statue');
class Medusa{
  constructor(){
    this.statues = []
  }


  
gazeAtVictim(victim){
  var newStatue = new Statue(victim.name)
  if(this.statues.length < 3 ){
  this.statues.push(newStatue)
  
  }
}
}



  



module.exports = Medusa
