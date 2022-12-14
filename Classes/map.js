// създаване на мап
const myMap = new Map;

// задаваме стойности в мап
myMap.set('sfdgefrg', 89);
myMap.set('scvbfgfhgfds', 5);

// взимаме стойност, чрез ключ
myMap.get('sfdgefrg');

// проверяваме дали клщч съществува
myMap.has('sfdgefrg');

// премахва ключ и стойноста му
myMap.delete('sfdgefrg');

// проверяваме броя на  елементи
myMap.size;

// премахва всички елементи в мапа
myMap.clear();

// обхождане на мап
for (let item of myMap) {
    console.log(item);
}

for (let [key, value] of myMap) {
    console.log(key, value);
}

// взимане на стойности
const entries = myMap.entries();
console.log(...entries);
const keys = myMap.keys();
const values = myMap.values();

// сортиране
let sort = Array.from(map.entries()).sort((a, b) => a[1] - b[1]);
for (const iterator of sort) {
    console.log(`${iterator[0]} -> ${iterator[1]} `);
}

// филтриране
Array.from(myMap).filter(item => item[1] > 5);