function solve(arr) {
    let result = [];
    let biggest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        if (currentNumber >= biggest) {
            result.push(currentNumber);
            biggest = currentNumber;
        }
    }
    return result;
}