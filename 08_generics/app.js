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
var numBox = { value: 10 };
var strBox = { value: "Hola" };
var objBox = { value: { name: "Aman" } };
var res = {
    data: "Success", status: 200
};
var jsonres = {
    data: { key: "value" },
    status: 200
};
var jsonres1 = {
    data: { name: "Aman", age: 66 },
    status: 200
};
// console.log(jsonres1)
// Generic with class 
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("Hola");
// console.log(stringContainer.getContent())
var numContainer = new Container(88);
// console.log(numContainer.getContent())
// Generics with array 
function getFirst(arr) {
    return arr[0];
}
// console.log(getFirst([1, 2, 3, 4]));
// console.log(getFirst(["hola", "mini", "A", "B"]))
// generic with keyof 
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty({ name: "Aman", age: 77 }, "name"));
