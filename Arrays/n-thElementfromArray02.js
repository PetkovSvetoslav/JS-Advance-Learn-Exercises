function solve(arr, number) {
    return arr.filter((element, index) => index % number == 0)
}