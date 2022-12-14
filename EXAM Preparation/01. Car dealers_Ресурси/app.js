window.addEventListener("load", solve);

function solve() {
// намиране на полетата
const publishButton = document.getElementById('publish');
const containerInfo = document.getElementById('container');
const previewTbody = document.getElementById('table-body');
// създаване на ивент на бутон1
publishButton.addEventListener('click', add);

// взимане на стойности на полетата
const makeInputElement = document.getElementById('make');
const modelInputElement = document.getElementById('model');
const yearInputElement = document.getElementById('year');
let fuelElement = document.getElementById('fuel');
let originalCost = document.getElementById('original-cost');
let sellingPrice = document.getElementById('selling-price');


function add(e){
  e.preventDefault();

const make = makeInputElement.value;
const model = modelInputElement.value;
const year = yearInputElement.value;
const fuel = fuelElement.value;
const orig = originalCost.value;
const selling = sellingPrice.value;


// проврка дали полетата не са празен стринг или негативна стойност
if (make == '' || model == '' || year == '' || fuel == '' || orig > selling){
  return;
  }
  const tr = document.createElement('tr');
tr.className = 'row';

let td1 = document.createElement('td');
  td1.textContent = `${make}`;
  tr.appendChild(td1);

  let td2 = document.createElement('td');
  td2.textContent = `${model}`;
  tr.appendChild(td2);

  let td3 = document.createElement('td');
  td3.textContent = `${year}`;
  tr.appendChild(td3);

  let td4 = document.createElement('td');
  td4.textContent = `${fuel}`;
 tr.appendChild(td4);

  let td5 = document.createElement('td');
  td5.textContent = `${orig}`;
 tr.appendChild(td5);

  let td6 = document.createElement('td');
  td6.textContent = `${selling}`;
  tr.appendChild(td6);

  let td7 = document.createElement('td');
 
  let button1 = document.createElement('button');
  button1.textContent = `Edit`;
  button1.className = 'action-btn edit';
  td7.appendChild(button1);

  let button2 = document.createElement('button');
  button2.textContent = `Sell`;
  tr.className = 'action-btn sell';
  td7.appendChild(button2);

 tr.appendChild(td7);


// tr.innerHTML = `
// <td>${make}</td>
// <td>${model}</td>
// <td>${year}</td>
// <td>${fuel}</td>
// <td>${orig}</td>
// <td>${selling}</td>
// <td>
// <button class="action-btn edit">Edit</button>
// <button class="action-btn sell">Sell</button>
// </td>
// `;

const editBtn = tr.querySelector('.edit');
editBtn.addEventListener('click', edit);
const sellBtn = tr.querySelector('.sell');
sellBtn.addEventListener('click', sell);

previewTbody.appendChild(tr);


  makeInputElement.value = '';
  modelInputElement.value = '';
  yearInputElement.value = '';
fuelElement.value = '';
originalCost.value = '';
sellingPrice.value = '';

function edit(){
  makeInputElement.value = make;
  modelInputElement.value = model;
  yearInputElement.value = year;
fuelElement.value = fuel;
originalCost.value = orig;
sellingPrice.value = selling;

  tr.remove()
}

function sell() {

  let totalProfit = document.getElementById('profit');
  let priceDiffernece = Number(orig.textContent) - Number(selling.textContent);
  totalProfit.textContent = (Number(totalProfit .textContent) + Number(priceDiffernece)).toFixed(2);

  let li = document.createElement('li');
  li.classList.add('each-list');

  let span1 = document.createElement('span');
  span1.textContent = `${make} ${model}`;
  li.appendChild(span1);

  let span2 = document.createElement('span');
  span2.textContent = `${year}`;
  li.appendChild(span2);

  let span3 = document.createElement('span');
  span3.textContent = priceDiffernece;
  li.appendChild(span3);

  soldCarsList.appendChild(li);
 
  tr.remove()
}
}




}
