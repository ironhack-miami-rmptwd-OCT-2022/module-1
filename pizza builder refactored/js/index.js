// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// // Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderToppingGroup1(queryString, stateKey){
  document.querySelectorAll(queryString).forEach((oneElem) => {
    if (state[stateKey]) {
      oneElem.style.visibility = 'visible';
    } else {
      oneElem.style.visibility = 'hidden';
    }
  });
}


function renderPepperoni() {
  renderToppingGroup1('.pep', "pepperoni");
}

function renderMushrooms() {
  renderToppingGroup1('.mushroom', "mushrooms");

}

function renderGreenPeppers() {
  renderToppingGroup1('.green-pepper', "greenPeppers");
}

function renderWhiteSauce() {
  if(state.whiteSauce){
    document.querySelector('.sauce').classList.add("sauce-white");
  } else {
    document.querySelector('.sauce').classList.remove("sauce-white")
  }
}

function renderGlutenFreeCrust() {
  if(state.glutenFreeCrust){
    document.querySelector('.crust').classList.add('crust-gluten-free')
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  let legend = {
    pepperoni: ".btn-pepperoni",
    mushrooms: ".btn-mushrooms",
    greenPeppers: ".btn-green-peppers",
    whiteSauce: ".btn-sauce",
    glutenFreeCrust: ".btn-crust"
  }
  let stateArray = Object.keys(state);
  for(let topping of stateArray){
    let correspondingButton = document.querySelector(legend[topping]);
    if(state[topping]){
      correspondingButton.classList.add('active');
    } else {
      correspondingButton.classList.remove('active')
    }
  }
  
}

function renderPrice() {
  let price = 10;
  document.querySelector('.panel.price ul').innerHTML = "";
  let stateArray = Object.keys(state);
  for(let topping of stateArray){
    if(state[topping]){
      document.querySelector('.panel.price ul').innerHTML += `<li>$${ingredients[topping].price} ${ingredients[topping].name}</li>`
      price += ingredients[topping].price;
    } 
  }
  document.querySelector('.panel.price strong').innerText = "$"+price;
}

renderEverything();

function activateButton(btnQueryString, stateKey){
  document.querySelector(btnQueryString).addEventListener('click', function () {
    state[stateKey] = !state[stateKey];
    renderEverything();
  });
}

activateButton('.btn.btn-pepperoni', "pepperoni");
activateButton('.btn.btn-mushrooms', "mushrooms");
activateButton('.btn.btn-green-peppers', "greenPeppers");
activateButton('.btn.btn-crust', "glutenFreeCrust");
activateButton('.btn.btn-sauce', "whiteSauce");




