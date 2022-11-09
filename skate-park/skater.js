const SkatePark = require("./skatepark");
class Skater{
    constructor(newSkater){
     this.name = newSkater.name
     this.skill = newSkater.skill
     this.tricks = newSkater.tricks
     this.money = newSkater.cash
     this.frustration = 0
    }
    practice(trickName){
        if (this.tricks[trickName] === false){
        this.frustration +=1
        }
        if(this.frustration === 3){
            this.tricks[trickName] = true
            this.frustration = 0
            return `I just learned to ${trickName}!!!`
        }
    }

}




module.exports = Skater