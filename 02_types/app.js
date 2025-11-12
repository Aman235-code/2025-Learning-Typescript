console.log("Array, Object, Tuple and Enum");
// objects 
var person = {
    firstname: "Aman",
    age: 21,
    xyz: {
        address: "Mumbai"
    }
};
// console.log(person);
// console.log(person.firstname);
// console.log(person.xyz.address)
// array
var personTwo = {
    firstname: "Aman",
    age: 21,
    skills: ["Reactjs", "Nodejs"],
    nums: [1, 2, 3, 4]
};
// console.log(personTwo);
var favoriteLanguage;
favoriteLanguage = ["Reactjs", "Python"];
// favoriteLanguage[1] = 20; // error
var random;
random = ["Hello", 1, true];
// tuple
var personThree = {
    name: "Aman",
    age: 21,
    skills: ["React", "Node", "JS"],
    product: [10, "Macbook M2"] // sure that fixed length of dtypes will be present
};
// personThree.product[1] = 11; // error
// enum
var personFour = {
    name: "Aman",
    age: 21,
    skills: ["React", "Node", "JS"],
    product: [10, "Macbook M2"], // sure that fixed length of dtypes will be present
    role: "AUTHOR"
};
if (personFour.role === "AUTHOR") {
    console.log("Author");
}
else if (personFour.role === "ADMIN") {
    console.log("Admin");
}
