class Modal {
    constructor(message = 'Alert'){
        this.message = message;
        this.element = this._init();
        this.render();
    }

_init(){
const overlay = e( 'div', {className: 'demo-modal'},
e('div', {className: 'modal-dialog'},
e('span', {}, this.message),
e('OK', this.onClose.bind(this))
)
);
return overlay;
}

render(){
    document.body.appendChild(this.element);
}
onClose(){
    this.element.remove();
}
}

function start() {
const modal = new Modal('This is a message');

// document.body.append(modal.element);
}

document.querySelector('button').addEventListener('click', start);

function e (type, props, ...content){
const element = document.createElement(type);
for (const key in props) {
  element[key] = props[key];

}
for (const entry of content) {
    if (typeof entry == 'string' || typeof entry == 'number') {
        entry = document.createTextNode(entry);
    }
    element.appendChild(entry);
}

return element;
}

function button(label, callback) {
    const element = e('button', {}, label);
    element.addEventListener('click', callback);
    return element;
}