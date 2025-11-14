console.log("Functions");
// function return type
function add(num1, num2) {
    return num1 + num2; // return 30
}
// console.log(add(10,20))
function greet(name) {
    console.log("hello ".concat(name));
}
// let combineFunction: Function;
// combineFunction = 60; // error 
// combineFunction = function() {}; // valid 
// combineFunction = add;
// combineFunction = greet;
// console.log(combineFunction(3, 4));
// combineFunction("Aman");
var combineFunction;
// combineFunction = greet;  // Invalid
combineFunction = add;
// console.log(combineFunction(100, 200));
// Function Type & Callbacks 
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (result) {
    console.log(result);
});
