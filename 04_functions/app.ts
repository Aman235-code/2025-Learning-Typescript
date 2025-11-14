console.log("Functions")

// function return type
function add(num1: number, num2: number): number {
    return num1 + num2; // return 30
}

// console.log(add(10,20))

function greet(name: string): void {
    console.log(`hello ${name}`)
}

// let combineFunction: Function;
// combineFunction = 60; // error 
// combineFunction = function() {}; // valid 
// combineFunction = add;
// combineFunction = greet;
// console.log(combineFunction(3, 4));
// combineFunction("Aman");

let combineFunction: (a: number, b: number) => number;
// combineFunction = greet;  // Invalid
combineFunction = add;
// console.log(combineFunction(100, 200));

// Function Type & Callbacks 

type CB = (n: number) => void;
function addHandle(num1: number, num2: number, cb: CB) {
    const result = num1 + num2;
    cb(result);
}

addHandle(10, 20, (result: number) => {
    console.log(result)
})