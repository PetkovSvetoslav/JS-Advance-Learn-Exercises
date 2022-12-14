function solve(arr, step) {
    for (var i = 0; i < step; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(" "));
}