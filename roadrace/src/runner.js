class Runner {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.milesRun = 0;
        this.fitness = 25;
        this.completedRaces = []
    }
    runSomeMiles(num){
       this.milesRun += num
       this.fitness += num
        // I need to add fitness 1  points ever 1 mile
    }
    stretch(){
        this.fitness += .5
    }
    runRace(raceName, distance){
        
    }
}

module.exports = Runner;
