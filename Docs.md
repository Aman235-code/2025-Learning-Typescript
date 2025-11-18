# TypeScript Tutorial

## Installation

```bash
npm install -g typescript --save-dev
```

To compile and run:

```bash
tsc filename.ts
node filename.js
```

---

## Core Datatypes

TypeScript has three main primitive types:

* number
* string
* boolean

### Example

```ts
function add(a: number, b: number, shouldPrint: boolean, label: string) {
  if (shouldPrint) {
    return `${label} ${a + b}`;
  } else {
    return "Not true";
  }
}

const result = add(20, 30, true, "Sum of two numbers:");
console.log(result);
```

---

## Objects, Arrays, Tuples, Enums

### Object

```ts
const person: {
  firstname: string;
  age: number;
  address: {
    city: string;
  };
} = {
  firstname: "Aman",
  age: 21,
  address: {
    city: "Mumbai"
  }
};
```

### Array

```ts
const developer: {
  firstname: string;
  age: number;
  skills: string[];
  scores: number[];
} = {
  firstname: "Aman",
  age: 21,
  skills: ["React", "Node"],
  scores: [10, 20, 30]
};
```

### Tuple

Tuples have a fixed order and fixed types.

```ts
const user: {
  name: string;
  age: number;
  details: [number, string];
} = {
  name: "Aman",
  age: 21,
  details: [10, "Macbook M2"]
};
```

### Enum

```ts
enum Role {
  ADMIN,
  AUTHOR,
  READ_ONLY
}

const employee = {
  name: "Aman",
  role: Role.ADMIN
};
```

---

## Union, Literal Types, Type Alias

### Union

Allows more than one type.

```ts
let value: number | string;
value = 10;
value = "Hello";
```

### Literal Types

```ts
let direction: "left" | "right" | "up" | "down";
direction = "left";
```

### Type Alias

```ts
type UserID = number | string;
let uid: UserID = 101;
```

---

## Functions

* You can specify parameter types and return types.
* If a function returns nothing, the type is `void`.

### Example

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}

function logMessage(msg: string): void {
  console.log(msg);
}
```

### Function Type

```ts
let compute: (a: number, b: number) => number;
compute = (x, y) => x + y;
```

---

## Unknown, Never, Any

### unknown

You need to check the type before using it.

```ts
let userInput: unknown = "hello";
let username: string;

if (typeof userInput === "string") {
  username = userInput;
}
```

### any

Allows anything. Avoid unless required.

```ts
let data: any = 10;
data = "hello";
```

### never

Used for functions that never return.

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

---

## Classes

```ts
class Person {
  private id: number;
  readonly name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  get details() {
    return `${this.id} - ${this.name}`;
  }

  static sayHello() {
    return "Hello from static method";
  }
}
```

### Abstract Class

```ts
abstract class Animal {
  abstract speak(): void;
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}
```

---

## Interfaces

```ts
interface Vehicle {
  name: string;
  speed: number;
}

class Car implements Vehicle {
  name = "BMW";
  speed = 120;
}

interface A { x: number; }
interface B { y: number; }

interface C extends A, B {}
```

---

## Type Guards

Used when the type is uncertain.

```ts
function printInfo(item: number | string) {
  if (typeof item === "string") {
    console.log(item.toUpperCase());
  } else {
    console.log(item.toFixed(2));
  }
}
```

---

## Type Casting

```ts
const input = document.getElementById("username") as HTMLInputElement;
console.log(input.value);

const btn = <HTMLButtonElement>document.getElementById("submit")!;
```
