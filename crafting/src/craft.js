class Craft{
    constructor(newCraft){
        this.name = newCraft.type
        this.materials = newCraft.materials
        this.completed = false
    }
    completeCraft(){
        this.completed = true
        return 'All done! It looks great!'
    }
    calculateProjectTotal(){
        var totalCost = 0
        for(var i = 0; i < this.materials.length; i ++){
            totalCost += this.materials[i].amount *  this.materials[i].price          
        }
        return totalCost
    }

}
module.exports = Craft;
