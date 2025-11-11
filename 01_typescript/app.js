// number, string, boolean 
// type - number
function add(num1, num2, printResult, text) {
    if (printResult) {
        return "".concat(text, " ").concat(num1 + num2);
    }
    else {
        return "Not true";
    }
}
var printResult = true;
var text = "Sum of two numbers";
var ans = add(20, 30, printResult, text);
console.log(ans);
