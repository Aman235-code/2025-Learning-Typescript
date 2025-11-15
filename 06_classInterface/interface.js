console.log("This is Interface");
var P = /** @class */ (function () {
    function P(n) {
        this.name = n;
    }
    P.prototype.greet = function (text) {
        console.log(text, this.name);
    };
    return P;
}());
var p1 = new P("Yes");
var user;
user = {
    name: "Aman",
    age: 22,
    greet: function (text) {
        console.log(this.name, text);
    }
};
var P1 = /** @class */ (function () {
    function P1(n) {
        this.name = n;
    }
    P1.prototype.greet = function (text) {
        console.log(text, this.name);
    };
    return P1;
}());
var user1;
user1 = new P1("Aman");
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.greet = function (text) {
        console.log(text, this.name);
    };
    return Person;
}());
var u;
u = new Person("AMan");
console.log(u);
var add;
add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(3, 4));
var M = /** @class */ (function () {
    function M(n) {
        this.name = n;
    }
    return M;
}());
