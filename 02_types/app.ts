console.log("Array, Object, Tuple and Enum");

// objects 
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

// console.log(person);
// console.log(person.firstname);
// console.log(person.xyz.address)

// array

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

// console.log(personTwo);

let favoriteLanguage : string[];
favoriteLanguage = ["Reactjs","Python"];

// favoriteLanguage[1] = 20; // error

let random : any[];
random = ["Hello", 1, true]

// tuple
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

// personThree.product[1] = 11; // error

// enum
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

if(personFour.role === Role.AUTHOR){
    console.log("Author")
}
else if(personFour.role === Role.ADMIN){
    console.log("Admin")
}