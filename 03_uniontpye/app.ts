console.log("Union, Literal Types, Type Alias")

// union -> | -> pipe in ts
function combine(num1: number | string | boolean, num2: number | string) {
    let res;
    if (typeof num1 === "number" && typeof num2 === "number") {
        res = num1 + num2
    }
    else {
        res = num1.toString() + num2.toString()
    }
    return res
}

// console.log(combine(10, 20)); // 30 
// console.log(combine("Hola Amigo", " Espanol"))

// Literal Types 
function combine2(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string") {
    let res;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        res = +num1 + +num2
    }
    else {
        res = num1.toString() + num2.toString()
    }
    return res
}

// const sum1 = combine2(22, 43, "as-number");
// const sum1s = combine2("22", "43", "as-number");
// const sum2 = combine2(32, 76, "as-number");
// const combinedName = combine2("Hi", "jok", "as-string");
// console.log(sum1s, combinedName)

// Type Alias / Custom Types 

type Combinable = number | string | boolean | string[]
type Ctype = "as-number" | "as-string";

function combine3(num1: Combinable, num2: Combinable, conversionType: Ctype) {
    let res;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        res = +num1 + +num2
    }
    else {
        res = num1.toString() + num2.toString()
    }
    return res
}

// const sum1 = combine2(22, 43, "as-number");
const sum1s = combine2("22", "43", "as-number");
// const sum2 = combine2(32, 76, "as-number");
const combinedName = combine2("Hi", "jok", "as-string");
// console.log(sum1s, combinedName)

type User = {
    name: string,
    age: number,
    skills: string[]
}
const user: User = {
    name: "aman",
    age: 22,
    skills: ["Java", "Python", "Javascript", "Nodejs"]
}

function greet(user: User) {
    console.log(user.name)
}

greet(user)