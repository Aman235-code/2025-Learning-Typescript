var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("Generics");
// only strings must come inside
var fruits = [];
fruits.push("Apple");
fruits.push("Mango");
fruits.push("Banana");
var Boy = {
    name: "Boy 1",
    age: 33
};
var BoyObj = [{
        name: "Vivek", age: 12
    }];
// console.log(BoyObj)
function merge(objA, objB, objC) {
    return __assign(__assign(__assign({}, objA), objB), objC);
}
// console.log(merge({ name: "A" }, { role: "SDE" }, { id: "d1" }));
// Generics Constraints
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("age", 25, true);
// console.log(obj)
