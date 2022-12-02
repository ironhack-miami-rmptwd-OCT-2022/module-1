// Soldier
class Soldier {
    constructor(healthArgument, strengthArgument){
        this.health = healthArgument;
        this.strength = strengthArgument;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(theAmountOfDamage){
        // this.health = this.health = theAmountOfDamage;
        this.health -= theAmountOfDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg){
        super(healthArg, strengthArg);
        // when i call super here i am literally calling the constructor of the solider class which needs 2 arguments so i better passs them in 
        this.name = nameArg;
    }
    receiveDamage(amount){
        super.receiveDamage(amount);
        // here im literaly calling the receiveDamage function from the soldier class and passing in amount]
        if(this.health > 0){
            return `${this.name} has received ${amount} points of damage`
        } else {
           return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
        // this version gets hoisted
    }
    battleCry = () => {
        return "Odin Owns You All!"
        // this version preserves the context of this
    }
    battleCry = function(){
        return "Odin Owns You All!"
        // 
    }
    // all the same thing

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(amountOfDmg){
        super.receiveDamage(amountOfDmg);
        if(this.health > 0){
            return `A Saxon has received ${amountOfDmg} points of damage`
        } else {
            return "A Saxon has died in combat"
        }

    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vike){
        this.vikingArmy.push(vike);
    }
    addSaxon(sax){
        this.saxonArmy.push(sax);
    }

    removeDeadBodies = (whichArmy) => {
        whichArmy.forEach((eachSoldier, ind)=>{
            if(eachSoldier.health <= 0){
                whichArmy.splice(ind, 1);
            }
        })
    }

    generateRandomSoldier = (whichArmy) => {
        let randomSoldierNumber = Math.floor(Math.random() * whichArmy.length);
        let randomSoldier = whichArmy[randomSoldierNumber];
        return randomSoldier;
    }

    vikingAttack = () => {
        let randomViking = this.generateRandomSoldier(this.vikingArmy);
        let randomSaxon = this.generateRandomSoldier(this.saxonArmy);
        let result = randomSaxon.receiveDamage(randomViking.attack());
        this.removeDeadBodies(this.saxonArmy);
        return result;
    }

    saxonAttack = () => {
        let randomViking = this.generateRandomSoldier(this.vikingArmy);
        let randomSaxon = this.generateRandomSoldier(this.saxonArmy);
        let result = randomViking.receiveDamage(randomSaxon.attack());
        this.removeDeadBodies(this.vikingArmy);
        return result;
    }

    showStatus = () => {

        if(!this.saxonArmy.length){
            return "Vikings have won the war of the century!"
        } else if (!this.vikingArmy.length){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }

    }

}
