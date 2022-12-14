class Restaurant {

constructor(budget){
this.budgetMoney = Number(budget);
this.menu = {};
this.stockProducts = {};
this.history = [];
}

loadProducts(products){
products.forEach((element) => {
    let [name, quantity, totalPrice] = element.split(' ');
    quantity = Number(quantity);
    totalPrice = Number(totalPrice);

if(this.budgetMoney >= totalPrice){
    if(!this.stockProducts[name]){
        this.stockProducts[name] = quantity;
    } else {
    this.stockProducts[name] += quantity;
    }
    this.budgetMoney -= totalPrice;
    this.history.push(`Successfully loaded ${quantity} ${name}`);
} else {
    this.history.push(`There was not enough money to load ${quantity} ${name}`);
}

});

return this.history.join('\n');
}


addToMenu(meal, products, price){

    if(!this.menu[meal]){
        this.menu[meal] = {
            products: {},
            price: price
        }
products.forEach((el) => {
        let [name, quantity] = el.split(' ');
        quantity = Number(quantity);
        this.menu[meal].products[name] = quantity;
    });

if(Object.keys(this.menu).length == 1){
return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
} else {
    const mealCount = Object.keys(this.menu).length;
return `Great idea! Now with the ${meal} we have ${mealCount} meals in the menu, other ideas?`
}

    } else {
        return `The ${meal} is already in the our menu, try something different.`
    }




}

showTheMenu(){
if (Object.keys(this.menu).length == 0){
    return "Our menu is not ready yet, please come later...";
} else {
let result = [];
for (let meal in this.menu) {
    result.push(`${meal} - $ ${this.menu[meal].price}`);
    
}

return result.join('\n');
}
}

makeTheOrder(meal){
if(!this.menu[meal]){
return `There is not ${meal} yet in our menu, do you want to order something else?`
} else {
    const neededProducts = {};
    for (const product in this.menu[meal].products) {
        if(!this.stockProducts[product] || this.stockProducts[product] < this.menu[meal].products[product]){
return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        } else {
neededProducts[product] = this.menu[meal].products[product];
        }
    }

for (const key in neededProducts) {
    this.stockProducts[key] -= neededProducts[key];
}
this.budgetMoney += this.menu[meal].price;
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
}



}

}