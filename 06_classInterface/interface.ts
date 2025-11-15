console.log("This is Interface")
// interface using in class

interface Greetable {
    name: string,
    greet(text: string): void;
}

interface Greetable2 {
    name: string,
    greet(text: string): void;
}

class P implements Greetable {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    greet(text: string): void {
        console.log(text, this.name);
    }
}

const p1 = new P("Yes")
// p1.greet("Hola")

// interface
interface Person {
    name: string;
    age: number;
    greet(text: string): void
}

let user: Person;

user = {
    name: "Aman",
    age: 22,
    greet(text): void {
        console.log(this.name, text)
    }
}

// console.log(user);
// user.greet("Hola")

// readonly
interface GreetableR {
    readonly name: string,
    greet(text: string): void;
}

class P1 implements GreetableR {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    greet(text: string): void {
        console.log(text, this.name);
    }
}
let user1: GreetableR;
user1 = new P1("Aman")
// user1.name = "Cange" // error 

// extending interface
interface Named {
    readonly name: string;
}

interface Grr extends Named {
    greet(text: string): void;
}

class Person implements Grr {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    greet(text: string): void {
        console.log(text, this.name);
    }
}

let u: Grr;
u = new Person("AMan")
console.log(u)

// type addFun = (a: number, b: number) => number;
interface addFun {
    (a: number, b: number): number
}

let add: addFun;
add = (n1: number, n2: number) => {
    return n1 + n2;
}

console.log(add(3, 4))

// optional (?)
interface Nam {
    readonly name: string;
    outputName?: string;
}

class M implements Nam {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
}

