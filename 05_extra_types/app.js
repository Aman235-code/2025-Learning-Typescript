console.log("Unknown, Never & Any Types");
// unknown & any
// let userInput : unknown;
var userInput;
var username;
// userInput = 10 // valid 
// username = 11 // invalid 
username = "Aman";
username = userInput; // error if userInput: unknown
if (typeof userInput === "string") {
    username = userInput;
}
// never
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
console.log(generateError("Internal Server Error", 500));
