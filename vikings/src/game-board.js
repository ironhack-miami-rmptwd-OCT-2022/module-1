function buildGameBoard(){
    for(let i = 1; i <= 10; i++){
        newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.id = "row-"+i;
        document.getElementById('game-board').append(newRow);
        for(let j = 1; j <= 20; j++){
            let newSquare = document.createElement('div');
            newSquare.id = `${i}-${j}`;
            newSquare.classList.add("battle-square");
            newRow.append(newSquare);
        }
    }
    giveSodliersCoordinates();
    addSoldiersToBoard();
}


function giveSodliersCoordinates(){
    theWar.vikingArmy.forEach((viking, index)=>{
        viking.x = 1;
        viking.y = index + 1;
    });

    theWar.saxonArmy.forEach((saxon, index)=>{
        saxon.x = 20;
        saxon.y = index + 6;
    });
}


function addSoldiersToBoard(){
    document.querySelectorAll('.battle-square').forEach((square)=>{  
        square.innerHTML = "";
    })


    theWar.vikingArmy.forEach((viking)=>{
        console.log(viking);
        let avatar = document.createElement('div');
        avatar.classList.add('avatar');
        avatar.classList.add('viking-avatar');
        avatar.innerHTML = `<p>${viking.name}</p>
        <img src="./images/viking.png"/>
        `
        let targetDiv = document.getElementById(`${viking.y}-${viking.x}`);
        targetDiv.append(avatar);
    });

    theWar.saxonArmy.forEach((saxon)=>{
        console.log(saxon);
        let avatar = document.createElement('div');
        avatar.classList.add('avatar');
        avatar.classList.add('saxon-avatar');
        avatar.innerHTML = `<p>${saxon.saxonNumber}</p>
        <img src="./images/saxon.png"/>
        `
        let targetDiv = document.getElementById(`${saxon.y}-${saxon.x}`);
        targetDiv.append(avatar);
    });

    
    mobilizeArmy();
    updateStatus();
}


function updateStatus(){
    document.getElementById("top-heading").innerHTML = `${theWar.vikingsTurnToAttack? "Vikings" : "Saxons"} Are On the Offensive With ${theWar.movesRemaining} moves remaining`
}




function mobilizeArmy(){
    document.onkeydown = undefined;
    let activeAvatars = theWar.vikingsTurnToAttack? document.querySelectorAll('.viking-avatar') : document.querySelectorAll('.saxon-avatar');
    for(let avatar of activeAvatars){
        avatar.onclick = function(e){
            listenForMovement(e);
        }
    }
    let inactiveAvatars = theWar.vikingsTurnToAttack? document.querySelectorAll('.saxon-avatar') : document.querySelectorAll('.viking-avatar');
    for(let avatar of inactiveAvatars){
        avatar.onclick = undefined;
    }

}



function listenForMovement(e){
    const target = e.currentTarget;

    document.onkeydown = function(keyDownEvent){
        console.log(keyDownEvent.key);
        if(keyDownEvent.key === "ArrowRight"){
            move("right", target)
        }
        if(keyDownEvent.key === "ArrowLeft"){
            move("left", target)
            
        }
        if(keyDownEvent.key === "ArrowDown"){
            move("down", target)
            
        }
        if(keyDownEvent.key === "ArrowUp"){
            move("up", target)
        }
    }
}

function move(direction, avatar){
    let parent = avatar.parentElement;
    let coordinates = parent.id.split("-");

    if(direction === "right"){
        coordinates[1] = Number(coordinates[1])+1;
        document.getElementById(coordinates.join("-")).append(avatar);
    }
    if(direction === "left"){
        coordinates[1] = Number(coordinates[1]) - 1;
        document.getElementById(coordinates.join("-")).append(avatar);
    }
    if(direction === "up"){
        coordinates[0] = Number(coordinates[0]) - 1;
        document.getElementById(coordinates.join("-")).append(avatar);
    }
    if(direction === "down"){
        coordinates[0] = Number(coordinates[0])+1;
        document.getElementById(coordinates.join("-")).append(avatar);
    }

    const soldierName = avatar.querySelector('p').innerHTML;
    let theSoldier;
    if(theWar.vikingsTurnToAttack){
        theSoldier = theWar.vikingArmy.find((oneViking)=>{
            return oneViking.name == soldierName;
        })
    } else {
        theSoldier = theWar.saxonArmy.find((oneSaxon)=>{
            return oneSaxon.saxonNumber = soldierName;
        })
    }
    
    theSoldier.x = Number(coordinates[1]);
    theSoldier.y = Number(coordinates[0]);
 



    adjustMovesRemaining();
    checkForAttack(coordinates.join("-"));
    updateStatus();
}


function checkForAttack(coordinates){
    let theBattleSquare = document.getElementById(coordinates);
    if(theBattleSquare.querySelector('.viking-avatar') && theBattleSquare.querySelector('.saxon-avatar')){
        theWar.attackCoordinates = coordinates.split("-");
        showAttackButton();
        console.log("attack imminent", theWar);
    }


}

function adjustMovesRemaining(){
    if(theWar.movesRemaining > 1) {
        theWar.movesRemaining -= 1
    } else {
        theWar.vikingsTurnToAttack = !theWar.vikingsTurnToAttack;
        theWar.movesRemaining = 9;
        mobilizeArmy();
    }
}


function showAttackButton(){
    let queryString = theWar.vikingsTurnToAttack? 'viking-attack-btn' : 'saxon-attack-btn';
    let theButton = document.getElementById(queryString);
    theButton.classList.remove('hidden');
    theButton.classList.remove('attack-not-ready');
    theButton.classList.add('attack-ready');

    theButton.onclick = theWar.vikingsTurnToAttack? animateVikingAttack : animateSaxonAttack;
}





