<h1 style="text-align:center">TypeScript Tutorial</h1>

To install it: ==npm install -g typescript --save-dev== 

To run it ==tsc filename.ts then run node filename.js==
<br/>
<h3>Datatypes:</h3>
<p>Totally 3 core datatypes</p>
<p>number, string and boolean</p>

```javascript
function add(num1: number, num2: number, printResult: boolean, text: string) {
    if (printResult) {
        return `${text} ${num1 + num2}`;
    }
    else {
        return "Not true"
    }
}

const printResult = true;
const text = "Sum of two numbers";
const ans = add(20, 30, printResult, text);
console.log(ans);
```

<h3>Array, Object, Tuple and Enum:</h3>
<p>Object:</p>

```js
const person: {
    firstname: string;
    age: number;
    xyz: {
        address: string;
    }
} = {
    firstname: "Aman",
    age: 21,
    xyz: {
        address: "Mumbai"
    }
}
```

<p>Array:</p>

```js
const personTwo: {
    firstname: string;
    age: number;
    skills: string[];
    nums : number[];
} = {
    firstname: "Aman",
    age: 21,
    skills: ["Reactjs", "Nodejs"],
    nums: [1,2,3,4]
}
```

<p>Tuple:</p>

```js
const personThree : {
    name: string;
    age: number;
    skills: string[];
    product: [number, string]; // order must be important
} = {
    name : "Aman",
    age: 21,
    skills: ["React", "Node", "JS"],
    product: [10, "Macbook M2"] // sure that fixed length of dtypes will be present
}
```

<p>Enum:</p>

```js
enum Role {ADMIN, AUTHOR, READ_USER_ONLY};

const personFour : {
    name: string;
    age: number;
    skills: string[];
    product: [number, string];
    role: Role;
}= {
    name : "Aman",
    age: 21,
    skills: ["React", "Node", "JS"],
    product: [10, "Macbook M2"], // sure that fixed length of dtypes will be present
    role : Role.ADMIN
}
```

<h3>Union, Literal Types, Type Alias:</h3>

<p>Union: Denoted by | </p>
<p>Literal Types: You can make your own type and assign a value to it</p>
<p>Type Alias/Custom Type: store the datatypes in any variable followed by <b>type</b> as the datatype name and then you can use that variable.</p>

<h3>Functions:</h3>

<p>You can define the return type after function paranthesis and before curly braces.</p>

<p>If the function does not return anything, then default datatype will be <b>void.</b></p>

<p>Typescript Syntax for functions</p>

==let functionName: (param1: type1, ....) => return type==

<h3>Unknown Never and Any Types:</h3>

<p>If you put unknown type in any variable of the type defined, then it'll give you an error</p>
<p>If you put any type in any variable of the defined type, it's valid.</p>
<p>Never type is mainly used in functions when we're not sure whenter it's returning anything</p>

<h3>Classes: </h3>
<p>Class: defined using class keyword</p>
<p>Access Modifiers: private :Accessible online inside that class, protected : class and the subclass inheriting it.</p>
<p>readonly: once you initialized, cannot re-initialize</p>
<p>Getter: get, Setter: set</p>
<p>Static Method: use static keyword and no need to create an obj, just use classname</p>
<p>Abstract class: when any method defined as abstract, then you must put abstract before name of the class and the subclass must inherit that class and implementation is present in that subclass.</p>

<h3>Interfaces: </h3>
<p>defined using interface keyword, key value pairs, name of variable/function : it's type</p>
<p>A Class can implements interface using implements keyword</p>
<p>One interface can extends one/more interfaces using extends keyword</p>

<h3>Type Guards:</h3>
<p>When we are not sure of the type we are using it'll give an error as it's confused which type we are using, so we make use of <b>in</b> keyword in class and function.</p>