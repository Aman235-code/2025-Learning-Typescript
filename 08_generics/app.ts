console.log("Generics")

// only strings must come inside
const fruits: Array<string> = [];
fruits.push("Apple");
fruits.push("Mango");
fruits.push("Banana");
// fruits.push(67); // error 

// console.log(fruits)

type Person = {
    name: string;
    age: number;
}

const Boy: Person = {
    name: "Boy 1",
    age: 33
}

const BoyObj: Array<Person> = [{
    name: "Vivek", age: 12
}]

// console.log(BoyObj)

function merge<T, U, V>(objA: T, objB: U, objC: V) {
    return { ...objA, ...objB, ...objC }
}

// console.log(merge({ name: "A" }, { role: "SDE" }, { id: "d1" }));

// Generics Constraints

function createObject<T extends string, U extends number, V extends boolean>(
    key: T,
    value: U,
    isActive: V
): {
    key: T,
    value: U,
    isActive: V
} {
    return { key, value, isActive }
}

const obj = createObject("age", 25, true);
// console.log(obj)

// With interfaces 
interface Box<T> {
    value: T
}
const numBox: Box<number> = { value: 10 }
const strBox: Box<string> = { value: "Hola" }
const objBox: Box<object> = { value: { name: "Aman" } }

// console.log(numBox)
// console.log(strBox)

// Generic Default 
interface User<T = string> {
    data: T,
    status: number
}

const res: User = {
    data: "Success", status: 200
}

const jsonres: User<object> = {
    data: { key: "value" },
    status: 200
}

// console.log(res)
// console.log(jsonres)

type Person2 = {
    name: string,
    age: number
}

const jsonres1: User<Person2> = {
    data: { name: "Aman", age: 66 },
    status: 200
}

// console.log(jsonres1)

// Generic with class 
class Container<T> {
    private content: T;
    constructor(content: T) {
        this.content = content
    }
    getContent(): T {
        return this.content
    }
}

const stringContainer = new Container<string>("Hola")
// console.log(stringContainer.getContent())

const numContainer = new Container<number>(88)
// console.log(numContainer.getContent())

// Generics with array 
function getFirst<T>(arr: T[]): T {
    return arr[0]
}

// console.log(getFirst([1, 2, 3, 4]));
// console.log(getFirst(["hola", "mini", "A", "B"]))

// generic with keyof 
function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

console.log(getProperty({ name: "Aman", age: 77 }, "name"))