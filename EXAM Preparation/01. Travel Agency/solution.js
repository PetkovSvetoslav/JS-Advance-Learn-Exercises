window.addEventListener('load', solution);

function solution() {
  const submitButton = document.getElementById('submitBTN');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');
  const block = document.getElementById('block');
  const preview = document.getElementById('infoPreview');

submitButton.disabled = false;
editButton.disabled = true;
continueButton.disabled = true;

const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
const labelValue = Array.from(document.getElementById('form').querySelectorAll('label'));
inputValues.pop();

submitButton.addEventListener('click', (ev) => {
if(inputValues[0].value && inputValues[1].value !== ''){

for (let index = 0; index < inputValues.length; index++) {
  const liElement = document.createElement('li');
  liElement.textContent = `${labelValue[index].textContent} ${inputValues[index].value}`;
  preview.appendChild(liElement);
}

for (const iterator of inputValues) {
  iterator.value = '';
}

ev.target.disabled = true;
editButton.disabled = false;
continueButton.disabled = false;

}

});

editButton.addEventListener('click', (ev) => {
const listItems = Array.from(preview.childNodes);

for (let index = 0; index < inputValues.length; index++) {
inputValues[index].value = listItems[index].textContent.split(': ')[1];
listItems[index].remove();
}

submitButton.disabled = false;
ev.target.disabled = true;
continueButton.disabled = true;
});

continueButton.addEventListener('click', () => {

block.innerHTML = '';
let h3 = document.createElement('h3');
h3.textContent = 'Thank you for your reservation!';
block.appendChild(h3);

});

}
