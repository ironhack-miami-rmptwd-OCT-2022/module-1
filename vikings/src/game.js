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
    new Saxon(90, 32),
    new Saxon(95, 5),
    new Saxon(88, 20),
    new Saxon(90, 30),
    new Saxon(88, 10),
    new Saxon(100, 32),
    new Saxon(95, 31),
    new Saxon(55, 65),
    new Saxon(128, 9),
    new Saxon(90, 22)
]



document.querySelector('#declare-war').onclick = function(e){
    theWar = new War();
    e.currentTarget.remove();
    document.querySelector('#top-heading').innerHTML = "The War Of the Century Has Begun";
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
            htmlString += `
            <img src="./images/saxon.png" />
            `
        }
        htmlString += `<p>health: ${soldier.health} </p>
        <p>strength: ${soldier.strength} </p>`

        soldierDiv.innerHTML = htmlString;




        document.querySelector(showingVikingArmy ? '#viking-army' : '#saxon-army').append(soldierDiv);
    })

}

function showArmies(){
    document.querySelector('#viking-army').innerHTML = ""  
    document.querySelector('#saxon-army').innerHTML = ""  
    showArmy(true);
    showArmy(false);
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
    if(sendToVikingArmy) theWar.addViking(theSoldier);
    else theWar.addSaxon(theSoldier);
    e.currentTarget.parentElement.remove();
    showArmies();
}

vikings.forEach((viking, theIndex)=>{
    let vikingDiv = document.createElement('div');
    vikingDiv.classList.add('vikingDiv')
    vikingDiv.innerHTML = `
                            <button id="${theIndex}" class="draft-btn">+</button>
                            <h4>${viking.name}</h4>
                            <img src="./images/viking.png" />
                           <p>health: ${viking.health} </p>
                           <p>strength: ${viking.strength} </p>
                            `
    document.querySelector('#vikings').append(vikingDiv);
})



saxons.forEach((saxon, theIndex)=>{
    let saxonDiv = document.createElement('div');
    saxonDiv.classList.add('saxonDiv')
    saxonDiv.innerHTML = `  <button id="${theIndex}" class="draft-btn">+</button>
                            <h4>Saxon</h4>
                            <img src="./images/saxon.png" />
                           <p>health: ${saxon.health} </p>
                           <p>strength: ${saxon.strength} </p>
                            `
    document.querySelector('#saxons').append(saxonDiv);

})

