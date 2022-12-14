function solve(){

let sendButtonElement = document.querySelector('#right form button');
sendButtonElement.addEventListener('click', sendInfo);

let productTypeSelectElement = document.querySelector('#type-product');
let descriptionTextAreaElement = document.querySelector('#description');
let clientNameInputElement = document.querySelector('#client-name');
let clientPhoneInputElement = document.querySelector('#client-phone');

let receivedOrdersSectionElement = document.querySelector('#received-orders');
let completedordersSectionElement = document.querySelector('#completed-orders');

let clearButtonElement = document.querySelector('#completed-orders button');
clearButtonElement.addEventListener('click', clearOrders);

function sendInfo(e) {
e.preventDefault();
let productType = productTypeSelectElement.value;
let description = descriptionTextAreaElement.value;
let clentName = clientNameInputElement.value;
let clientPhone = clientPhoneInputElement.value;

if(description == '' || clentName == '' || clentName == ''){
    return
}
productTypeSelectElement.value = '';
descriptionTextAreaElement.value = '';
clientNameInputElement.value = '';
clientPhoneInputElement.value = '';

let conteinerDivElement = document.createElement('div');
conteinerDivElement.classList.add('container');

let h2Element = document.createElement('h2');
h2Element.textContent = `Product type for repair: ${productType}`;

let h3Element = document.createElement('h3');
h3Element.textContent = `Client information: ${clentName}, ${clientPhone}`;

let h4Element = document.createElement('h4');
h4Element.textContent = `Description of the problem: The device refuses to charge`;

let startButton = doc.createElement('button');
startButton.classList.add('start-btn');
startButton.textContent = 'Start Repair'

let finishtButton = doc.createElement('button');
finishtButton.classList.add('finish-btn');
finishtButton.textContent = 'Finish Repair'
finishtButton.disabled = true;

startButton.addEventListener('click', startRepair);
finishtButton.addEventListener('click', finishRepair);

conteinerDivElement.appendChild(h2Element);
conteinerDivElement.appendChild(h3Element);
conteinerDivElement.appendChild(h4Element);
conteinerDivElement.appendChild(startButton);
conteinerDivElement.appendChild(finishtButton);

receivedOrdersSectionElement.appendChild(conteinerDivElement);

}

function startRepair(){
e.currentTarget.disabled = true;
e.currentTarget.parentNode.querySelector('.finish-btn').disabled = false;
}

function finishRepair(){
  let containerDiv = e.currentTarget.parentNode;
//   remove 2 buttons
  e.currentTarget.remove();
  containerDiv.querySelector('.start-btn').remove();

  containerDiv.remove();
  completedordersSectionElement.appendChild(containerDiv);
}

function clearOrders(){
    let allContainer = Array.from(e.currentTarget.parentNode.querySelectorAll('.container'));
    for (const iterator of allContainer) {
        iterator.remove();
    }
}

}