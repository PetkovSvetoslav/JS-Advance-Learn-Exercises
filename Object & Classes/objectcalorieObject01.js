function solve(input) {
    let object = {};

    for (let i = 0; i < input.length; i+=2) {
let product = input[i];
let calorie = input[i+1];
object[product] = Number(calorie);
    }
    console.log(object);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);