let theWar;


const vikings = [
    new Viking("Harald", 100, 22),
    new Viking("Ragnar", 90, 19),
    new Viking("Erik", 111, 20),
    new Viking("Bjorn", 80, 30),
    new Viking("Frode", 88, 29),
    new Viking("Bo", 100, 22),
    new Viking("Astrid", 105, 21),
    new Viking("Sigrid", 65, 65),
    new Viking("Sif", 128, 9),
    new Viking("Tove", 100, 22)
]

const saxons = [
    new Saxon(1, 90, 32),
    new Saxon(2, 95, 5),
    new Saxon(4, 88, 20),
    new Saxon(5, 90, 30),
    new Saxon(6, 88, 10),
    new Saxon(7, 100, 32),
    new Saxon(8, 95, 31),
    new Saxon(10, 55, 65),
    new Saxon(16, 128, 9),
    new Saxon(19, 90, 22)
]



document.querySelector('#declare-war').onclick = function(e){
    theWar = new War();
    e.currentTarget.remove();
    document.querySelector('#top-heading').innerHTML = "The War Of the Century Has Begun";
    activateDraftButtons();
}

function activateDraftButtons(){
    let draftButtons = document.querySelectorAll('.draft-btn');
    for(let button of draftButtons){
        button.classList.add('ready');
        button.onclick = function(e){
            addSoldierToArmy(e)
        }
    }
}




function showArmy(showingVikingArmy){  
    const whichArmy = showingVikingArmy ? theWar.vikingArmy : theWar.saxonArmy;

    whichArmy.forEach((soldier, theIndex)=>{
        let soldierDiv = document.createElement('div');

        soldierDiv.classList.add(showingVikingArmy? 'vikingDiv' : 'saxonDiv');

        let htmlString = ``;
        if(showingVikingArmy){
            htmlString+= `<h4>${soldier.name}</h4>
                          <img src="./images/viking.png" />
            `
        } else {
            htmlString += `<h4>Saxon ${soldier.saxonNumber}</h4>
            <img src="./images/saxon.png" />
            `
        }

        htmlString += `<p>health: ${soldier.health} </p>
        <p>strength: ${soldier.strength} </p>`

        soldierDiv.innerHTML = htmlString;




        document.querySelector(showingVikingArmy ? '#viking-army' : '#saxon-army').append(soldierDiv);
    })

}

function showArmiesAndDraftPool(){
    document.querySelector('#viking-army').innerHTML = "";  
    document.querySelector('#saxon-army').innerHTML = ""; 
    showArmy(true);
    showArmy(false);
    if(document.getElementById('draftPoolContainer')){
        document.querySelector('#vikings').innerHTML = "";  
        document.querySelector('#saxons').innerHTML = ""; 
        showInitialSaxons(true);
        showInitialVikings(true);
        activateDraftButtons();
        if(theWar.vikingArmy.length === 5 && theWar.saxonArmy.length === 5) transitionToBattle();
    }
}


function addSoldierToArmy(e){
    const theIndex = e.currentTarget.id;
    // let vikingArmy;
    // if(e.currentTarget.parentElement.classList.contains("vikingDiv")){
    //     vikingArmy = true;
    // } else {
    //     vikingArmy = false;
    // }
    const sendToVikingArmy = e.currentTarget.parentElement.classList.contains("vikingDiv");
    const theSoldier = sendToVikingArmy? vikings[theIndex] : saxons[theIndex];
    if(sendToVikingArmy && theWar.vikingArmy.length < 5 ) {
        theWar.addViking(theSoldier);
        vikings.splice(theIndex, 1);
    } 
    else if (!sendToVikingArmy && theWar.saxonArmy.length < 5) {
        theWar.addSaxon(theSoldier);
        saxons.splice(theIndex,1);
    }
    showArmiesAndDraftPool();

}

function showInitialVikings(ready){
    vikings.forEach((viking, theIndex)=>{
        let vikingDiv = document.createElement('div');
        let classList = "draft-btn";
        if(ready) classList += " ready";
        vikingDiv.classList.add('vikingDiv')
        vikingDiv.innerHTML = `
                                <button id="${theIndex}" class="${classList}">+</button>
                                <h4>${viking.name}</h4>
                                <img src="./images/viking.png" />
                            <p>health: ${viking.health} </p>
                            <p>strength: ${viking.strength} </p>
                                `
        document.querySelector('#vikings').append(vikingDiv);
    })
}
showInitialVikings(false);


function showInitialSaxons(ready){
    saxons.forEach((saxon, theIndex)=>{
        let saxonDiv = document.createElement('div');
        let classList = "draft-btn";
        if(ready) classList += " ready";
        saxonDiv.classList.add('saxonDiv')
        saxonDiv.innerHTML = `  <button id="${theIndex}" class="${classList}">+</button>
                                <h4>Saxon ${saxon.saxonNumber}</h4>
                                <img src="./images/saxon.png" />
                            <p>health: ${saxon.health} </p>
                            <p>strength: ${saxon.strength} </p>
                                `
        document.querySelector('#saxons').append(saxonDiv);

    })
}
showInitialSaxons(false);


function transitionToBattle(){
    document.getElementById('draftPoolContainer').remove();
    document.getElementById('armiesContainer').style.width = "100%";
    addAttackButtons();
    console.log("bout to battle, yo");
    let newRow;
    buildGameBoard();
}

function addAttackButtons(){
    let vikingAttackButton = document.getElementById('viking-attack-btn')
    vikingAttackButton.classList.remove('hidden');
    let saxonAttackButton = document.getElementById('saxon-attack-btn')
    saxonAttackButton.classList.remove('hidden');
    vikingAttackButton.onclick = animateVikingAttack;
    saxonAttackButton.onclick = animateSaxonAttack;
    
}


function animateVikingAttack(){
    let status = theWar.vikingAttack();
    showArmiesAndDraftPool();
    document.getElementById('viking-attack-btn').classList.remove('attack-ready')
    document.getElementById('viking-attack-btn').classList.add('attack-not-ready');
    document.getElementById('saxon-attack-btn').classList.add('attack-ready')
    document.getElementById('saxon-attack-btn').classList.remove('attack-not-ready');
    document.getElementById('top-heading').innerHTML = status;
}

function animateSaxonAttack(){
    let status = theWar.saxonAttack();
    showArmiesAndDraftPool();
    document.getElementById('saxon-attack-btn').classList.remove('attack-ready')
    document.getElementById('saxon-attack-btn').classList.add('attack-not-ready');
    document.getElementById('viking-attack-btn').classList.add('attack-ready')
    document.getElementById('viking-attack-btn').classList.remove('attack-not-ready');
    document.getElementById('top-heading').innerHTML = status;
}

document.getElementById('collapse-armies').onclick = function(){
    if(document.getElementById('viking-army-container').classList.contains('collapsed')){
        document.getElementById('viking-army-container').classList.remove('collapsed');
        document.getElementById('saxon-army-container').classList.remove('collapsed');
    } else {
        document.getElementById('viking-army-container').classList.add('collapsed');
        document.getElementById('saxon-army-container').classList.add('collapsed');
    }
}


