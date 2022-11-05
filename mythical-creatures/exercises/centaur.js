class Centaur{
    constructor(centaur){
        this.name = centaur.name
        this.breed = centaur.type
        this.cranky = false
        this.standing = true
        this.shootsBow = 0
        this.runs = 0
        this.layingDown = false
    }
    shootBow(){
        this.shootsBow +=1
        if(this.runs + this.shootsBow >= 3){
            this.cranky = true
        }
        if(this.cranky || !this.standing){
            return 'NO!'   
        }else{ 
            return 'Twang!!!'   }  
    }    
     run(){
        this.runs +=1
        if(this.cranky || !this.standing){
            return 'NO!'   
        }else{ 
            return 'Clop clop clop clop!!!'   } 
        
    }
    sleep(){
        if(this.standing === true){
        return 'NO!'
        }else{
            return 'ZZZZ'
        }
    }
    
    
    layDown(){
        this.standing = false
        this.layingDown = true
    }
    standUp(){
        this.standing = true
        this.layingDown = false
    }
}



module.exports = Centaur
