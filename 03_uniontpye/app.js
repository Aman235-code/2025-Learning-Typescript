console.log("Union, Literal Types, Type Alias");
// union -> | -> pipe in ts
function combine(num1, num2) {
    var res;
    if (typeof num1 === "number" && typeof num2 === "number") {
        res = num1 + num2;
    }
    else {
        res = num1.toString() + num2.toString();
    }
    return res;
}
// console.log(combine(10, 20)); // 30 
// console.log(combine("Hola Amigo", " Espanol"))
// Literal Types 
function combine2(num1, num2, conversionType) {
    var res;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        res = +num1 + +num2;
    }
    else {
        res = num1.toString() + num2.toString();
    }
    return res;
}
function combine3(num1, num2, conversionType) {
    var res;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        res = +num1 + +num2;
    }
    else {
        res = num1.toString() + num2.toString();
    }
    return res;
}
// const sum1 = combine2(22, 43, "as-number");
var sum1s = combine2("22", "43", "as-number");
// const sum2 = combine2(32, 76, "as-number");
var combinedName = combine2("Hi", "jok", "as-string");
var user = {
    name: "aman",
    age: 22,
    skills: ["Java", "Python", "Javascript", "Nodejs"]
};
function greet(user) {
    console.log(user.name);
}
greet(user);
