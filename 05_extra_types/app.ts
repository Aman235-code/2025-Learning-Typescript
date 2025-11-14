console.log("Unknown, Never & Any Types")
// unknown & any
// let userInput : unknown;
let userInput: any;
let username: string;

// userInput = 10 // valid 
// username = 11 // invalid 
username = "Aman"

username = userInput // error if userInput: unknown

if (typeof userInput === "string") {
    username = userInput;
}

// never
function generateError(message: string, code: number): never {
    throw {message: message, statusCode: code}
}

console.log(generateError("Internal Server Error", 500));