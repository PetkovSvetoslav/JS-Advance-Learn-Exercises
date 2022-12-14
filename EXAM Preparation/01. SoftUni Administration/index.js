function solve() {
let buttonElement = document.querySelector('.admin-view .action button');
buttonElement.addEventListener('click', add);

let lectures = {};

function add(e){
    e.preventDefault();

let lectureNameElement = document.querySelector('input[name="lecture-name"]');
let lecturedateElement = document.querySelector('input[name="lecture-date"]');
let lectureModuleElement = document.querySelector('select[name="lecture-module"]');

if(!lectureNameElement.value || !lecturedateElement.value || lectureModuleElement == 'Select module'){
return;
}

if(!lectures[lectureModuleElement.value]){
lectures[lectureModuleElement.value] = [];
}

let currentLecture = {name: lectureNameElement.value, data: formatDate(lecturedateElement)};
lectures[lectureModuleElement.value].push(currentLecture);
// ...................................................
createTrainings(lectures);

}

function createTrainings(lectures){
for (const module in lectures) {
   let lecture = lectures[module];
   lecture.sort((a,b) => a.data.localeCompare(b.data));
}

    let liElement = document.createElement('li');
    liElement.classList.add('flex');
    
    let courseHeadingElement = document.createElement('h4');
    courseHeadingElement.textContent = `${lectureNameElement.value} - ${formatDate(lecturedateElement.value)}`;
    
    let deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('red');
    deleteButtonElement.textContent = 'del';
    
    liElement.appendChild(courseHeadingElement);
    liElement.appendChild(deleteButtonElement);
    // ................................................
    
    let divElement = document.createElement('div');
    divElement.classList.add('module');
    
    let headingElement = document.createElement('h3');
    headingElement.textContent = `${lectureModuleElement.value.toUpperCase()}-MODULE`;
    
    let lectureList = document.createElement('ul');
    lectureList.appendChild(liElement);
    
    divElement.appendChild(headingElement);
    divElement.appendChild(lectureList);
    
    let modulesEndElement = document.querySelector('.modules');
    modulesEndElement.appendChild(divElement);
    
    lectureNameElement.value = '';
    lecturedateElement.value = '';
    lectureModuleElement.value = '';
}

function formatDate(dateInput){
let [date, time] = dateInput.split('T');
date = date.replace(/-/g,'/');
return `${date} - ${time}`
}

}