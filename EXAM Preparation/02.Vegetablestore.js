class VegetableStore {
    constructor(owner, location){
this.owner = owner;
this.location = location;
this.availableProducts = [];
    }

    loadingVegetables (vegetables){
let typeArr = [];
for (const vegetable of vegetables) {
    let [type, quantity, price] = vegetable.split(' ');
    quantity = Number(quantity);
    price = Number(price);
    let product = this.availableProducts.find((v) => v.type == type);
if(product == undefined){
    this.availableProducts.push({type, quantity, price});
    typeArr.push(type);
} else {
    product.quantity += quantity;
    if(price > product.price){
        product.price = price;
    }
}

}
return `Successfully added ${typeArr.join(', ')}`
    }

buyingVegetables (selectedProducts){
let totalPrice = 0;
for (const prod of selectedProducts) {
    let [type, quantity] = prod.split(' ');
    quantity = Number(quantity);
    let product = this.availableProducts.find( (v) => v.type == type);
if(product == undefined){
    throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
}
if(quantity >= product.quantity){
    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
}

let price = product.price * quantity;
product.quantity -= quantity;
totalPrice += price;

}
return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

}

rottingVegetable (type, quantity){
    quantity = Number(quantity);
    let product = this.availableProducts.find((v) => v.type == type);
if(product == undefined){
throw new Error(`${type} is not available in the store.`);
}

if(quantity >= product.quantity){
    product.quantity = 0;
    return `The entire quantity of the ${type} has been removed.`
} else {
    product.quantity -= quantity;
    return `Some quantity of the ${type} has been removed.` 
}


}

revision (){
let resArr = ['Available vegetables:'];
this.availableProducts.sort((a,b) => a.price - b.price);
this.availableProducts.forEach((v) => resArr.push(`${type}-${quantity}-$${price}`));
resArr.push(`The owner of the store is ${owner}, and the location is ${location}.`);
return resArr.join('\n')
}

}