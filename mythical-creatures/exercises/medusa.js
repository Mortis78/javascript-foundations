var Person = require('./person');
var Statue = require('./statue');
class Medusa{
  constructor(){
    this.statues = []
  }


  
gazeAtVictim(victim){
  console.log(victim.name)
    var newStatue = new Statue(victim.name)
    if(this.statues.length < 3){
      this.statues.push(newStatue)
    }
     if(this.statues.length === 3 ){ 
      this.statues.splice[0,1]
      this.statues.push(newStatue)
    }
    console.log(this.statues)

  }

}



  



module.exports = Medusa
