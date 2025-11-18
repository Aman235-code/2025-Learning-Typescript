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