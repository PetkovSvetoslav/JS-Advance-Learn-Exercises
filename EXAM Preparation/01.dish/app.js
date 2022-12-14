window.addEventListener("load", solve);

function solve(){

  const sendButtonElement = document.getElementById('form-btn');
  sendButtonElement.addEventListener('click', sendInfo);
  
  const clientNameInputElement = document.getElementById('first-name');
  const clientSecondNameInputElement = document.getElementById('last-name');
  const clientAgeInputElement = document.getElementById('age');
  const genderInputElement = document.getElementById('#genderSelect option');
  const descriptionInputElement = document.querySelector('#inner-wrap textarea');
  
  const inProgressSectionElement = document.getElementById('in-progress');
  const completedordersSectionElement = document.getElementById('finished');
  
  const clearButtonElement = document.getElementById('clear-btn');
  clearButtonElement.addEventListener('click', clearOrders);
  
  function sendInfo(e) {
  e.preventDefault();

 let clientName = clientNameInputElement.value;
 let clentSecondName = clientSecondNameInputElement.value;
 let clientAge = clientAgeInputElement.value;
 let gender = genderInputElement.value;
 let description = descriptionInputElement.value;
  
  if(description == '' || clientName == '' || clentSecondName == ''){
      return
  }
  clientNameInputElement.value.value = '';
  clientSecondNameInputElement.value = '';
  clientAgeInputElement.value = '';
  genderInputElement.value = '';
  descriptionInputElement.value = '';
  
  let conteinerLiElement = document.createElement('li');
  conteinerLiElement.classList.add('each-line');

  let articleElement = document.createElement('article');

  let h2Element = document.createElement('h4');
  h2Element.textContent = `${clientName} ${clentSecondName}`;
  
  let h3Element = document.createElement('p');
  h3Element.textContent = `${gender}, ${clientAge}`;
  
  let h4Element = document.createElement('p');
  h4Element.textContent = `Dish description: ${description}`;
  
  let startButton = doc.createElement('button');
  startButton.classList.add('edit-btn');
  startButton.textContent = 'Edit'
  
  let finishtButton = doc.createElement('button');
  finishtButton.classList.add('complete-btn');
  finishtButton.textContent = 'Mark as complete'
  finishtButton.disabled = true;
  
  startButton.addEventListener('click', startRepair);
  finishtButton.addEventListener('click', finishRepair);
  
  articleElement.appendChild(h2Element);
  articleElement.appendChild(h3Element);
  articleElement.appendChild(h4Element);
  conteinerLiElement.appendChild(articleElement);
  conteinerLiElement.appendChild(startButton);
  conteinerLiElement.appendChild(finishtButton);

  inProgressSectionElement.appendChild(conteinerLiElement);
  
  }
  
  function startRepair(){
  e.currentTarget.disabled = true;
  e.currentTarget.parentNode.querySelector('.finish-btn').disabled = false;
  }
  
  function finishRepair(){
    let containerLi = e.currentTarget.parentNode;
  //   remove 2 buttons
    e.currentTarget.remove();
    containerLi.querySelector('.start-btn').remove();
  
    containerLi.remove();
    completedordersSectionElement.appendChild(containerLi);
  }
  
  function clearOrders(){
      let allContainer = Array.from(e.currentTarget.parentNode.querySelectorAll('.finished'));
      for (const iterator of allContainer) {
          iterator.remove();
      }
  }
  
  }
