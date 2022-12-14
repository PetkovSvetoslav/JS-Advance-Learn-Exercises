function solve() {
    const formControls = document.querySelectorAll('.form-control input');
const lecture = formControls[0];
const date = formControls[1];
const moduleName = formControls[2];

function add(){
let delBtn = document.createElement('button');
}

document.domain.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON'){
        return;
    }
    if(e.target.textContent === 'Del'){

    } else if (e.target.textContent === 'Add'){
        e.preventDefault();
        add();
    }
});


};