// number, string, boolean 

// type - number
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