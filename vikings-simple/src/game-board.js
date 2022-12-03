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
    addSoldiersToBoard();
}


function addSoldiersToBoard(){
    theWar.vikingArmy.forEach((viking, index)=>{
        let avatar = document.createElement('div');
        avatar.classList.add('avatar');
        avatar.innerHTML = `<p>${viking.name}</p>
        <img src="./images/viking.png"/>
        `
        let targetDiv = document.getElementById(`${index+1}-1`);
        targetDiv.append(avatar);
        viking.x = 1;
        viking.y = index + 1;
    });

    theWar.saxonArmy.forEach((saxon, index)=>{
        let avatar = document.createElement('div');
        avatar.classList.add('avatar');
        avatar.innerHTML = `<p>${saxon.saxonNumber}</p>
        <img src="./images/saxon.png"/>
        `
        let targetDiv = document.getElementById(`${index+6}-20`);
        targetDiv.append(avatar);
        saxon.x = 20;
        saxon.y = index + 6;
    });


    let avatars = document.querySelectorAll('.avatar');
    for(let avatar of avatars){
        avatar.onclick = function(e){
            listenForMovement(e);
        }
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
    console.log(coordinates);
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

}





