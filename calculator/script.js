let buttons = document.querySelectorAll('#add, #sub, #mult, #div');


for(button of buttons){
    button.onclick = function(e){
        let firstNum = document.querySelector('#firstnum > input').value
        let secondNum = document.querySelector('#secondnum > input').value;

        let hashmap = {
            add:  Number(firstNum) + Number(secondNum),
            sub:  Number(firstNum) - Number(secondNum),
            div:  Number(firstNum) / Number(secondNum),
            mult:  Number(firstNum) * Number(secondNum)
        }
        
        let result = hashmap[e.currentTarget.id];
      
        document.querySelector('#answer').innerText = result;
    }
}




document.querySelector('#clear').onclick = function(){
    let firstNumDiv = document.querySelector('#firstnum > input');
    let secondNumDiv = document.querySelector('#secondnum > input');
    firstNumDiv.value = undefined;
    secondNumDiv.value = undefined;
    document.querySelector('#answer').innerText = "";
}