function solve() {
    // collect field values
    const input = {
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    };

    const [_, openSection, progressSection, finishSection] = 
    Array.from(document.querySelectorAll('section')).map(e => e.children[1]);

    document.getElementById('add').addEventListener('click', addTask);
function addTask(event){

event.preventDefault();
const article = document.createElement('article');
// create elements

// const h3 = document.createElement('h3');
// h3.textContent = input.name.value;
// article.appendChild(h3);
article.appendChild(createElement('h3', input.name.value));
article.appendChild(createElement('p', `Description: ${input.description.value}`));
article.appendChild(createElement('p', `Due Date: ${input.date.value}`));
const div = createElement('div', '', 'flex');
const startButton = createElement('button', 'Start', 'green');
div.appendChild(startButton);
const deleteButton = createElement('button', 'Delete', 'red');
div.appendChild(deleteButton);
const finishButton = createElement('button', 'Finish', 'orange');

article.appendChild(div);

// append to Open section
openSection.appendChild(article);
// изчистване на елементите
Object.values(input).forEach(i => i.value = '');

// add functionality for start, finish, delete task
deleteButton.addEventListener('click', onDelete);
function onDelete(){
    article.remove();
}

startButton.addEventListener('click', onStart);
function onStart(){
    startButton.remove();
    div.appendChild(finishButton);
progressSection.appendChild(article);
}

finishButton.addEventListener('click', onFinish);
function onFinish(){
div.remove();
finishSection.appendChild(article);
}

}

function createElement(type, content, className){
    const element = document.createElement(type);
    element.textContent = content;
    if(className){
        element.className = className;
    }
   return element;
}

}