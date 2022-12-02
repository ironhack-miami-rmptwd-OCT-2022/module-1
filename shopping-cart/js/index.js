
function activateRemoveButtons(){
  const removeButtons = document.querySelectorAll('.btn-remove');
  for(btn of removeButtons){
    btn.onclick = function(e){
      removeProduct(e);
    }
  }
}
activateRemoveButtons();
  
  
  function calculateRow(theRow){
    const price = theRow.querySelector('.price span').innerHTML;
    const quantity = theRow.querySelector('.quantity input').value;
    const subTotal = (price * quantity).toFixed(2);
    const subTotalDiv = theRow.querySelector('.subtotal span');
    subTotalDiv.innerHTML = subTotal;
    return Number(subTotal);
  }



const theButton = document.querySelector('#calculate');
theButton.onclick = calculateAll;
function calculateAll (){
  const theRows = document.querySelectorAll('.product');
  let grandTotal = 0;
  for(let row of theRows){
    grandTotal += calculateRow(row);
  }
    const totalSpan =  document.querySelector('#total-value span')
    totalSpan.innerHTML = grandTotal;
}

function createNewRow(){
  const newProductName = document.querySelector('.create-product td:first-child input').value;
  const newProductPrice = document.querySelector('.create-product td:nth-child(2) input').value; 
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `<td class="name">
                      <span>${newProductName}</span>
                      </td>
                      <td class="price">$<span>${Number(newProductPrice).toFixed(2)}</span></td>
                      <td class="quantity">
                        <input type="number" value="0" min="0" placeholder="Quantity" />
                      </td>
                      <td class="subtotal">$<span>0</span></td>
                      <td class="action">
                        <button class="btn btn-remove">Remove</button>
                      </td>`
  

  const table = document.querySelector('tbody');
  table.append(newRow);
  activateRemoveButtons();
}
document.querySelector('#create').onclick = createNewRow;



function removeProduct(event) {
  const target = event.currentTarget;
  const ancestor = target.parentElement.parentElement;
  ancestor.remove();
}

