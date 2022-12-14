function getF() {
    let n1 = 0;
    let n2 = 1;
    function getNumber() {
        let nextNumber = n1 + n2;
        n1 = n2;
        n2 = nextNumber;
        
        return n1;
    }
    // console.log(1);
    return  getNumber; 
}

// let fib = getF();
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());