function add(a, b) {
    return a+b;
}

add(1000, 389);
console.log(add(1000, 389));

function subtract(a, b) {
    return a-b;
}

subtract(300, 65);
console.log(subtract(300, 65));

function multiply(a, b) {
    return a*b;
}

multiply(1422, 6);
console.log(multiply(1422, 6));

function divide(a, b) {
    return a/b;
}

divide(2, 2);
console.log(divide(2, 2));

function increment(n=2) {
    return (n +=1);
}
    
function decrement(n=2) {
    return (n -=1);
}

increment(n=2);
decrement(n=2);


function makeInt(n){
    return parseInt(n, 10);
}



makeInt("263");
console.log(makeInt("263"));

function preserveDecimal(n) {
    return parseFloat(n)
}

preserveDecimal("Random!")
console.log(preserveDecimal("Random!"))