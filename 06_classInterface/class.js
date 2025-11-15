var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("This is a class");
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Dept", this.name);
    };
    return Department;
}());
var accounting = new Department("Accounting");
// accounting.describe();
var copy = {
    name: "Accounting2",
    describe: accounting.describe
};
// copy.describe()
// Access Modifiers
var Department2 = /** @class */ (function () {
    function Department2(n) {
        this.name = n;
        this.employees = [];
    }
    Department2.prototype.describe = function () {
        console.log(this.name);
    };
    Department2.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department2.prototype.displayEmployee = function () {
        console.log("Total Emp", this.employees.length);
        console.log(this.employees);
    };
    return Department2;
}());
var acc = new Department2("ACC");
// acc.describe()
acc.addEmployee("Emp1");
acc.addEmployee("Emp2");
// acc.displayEmployee();
// acc.employees = ["emp3"] // error 
// readonly
var Department3 = /** @class */ (function () {
    function Department3(n) {
        this.name = n;
        this.id = "d1"; // only once you can initialize
        this.employees = [];
    }
    Department3.prototype.describe = function () {
        // this.id = "d2" // error
        console.log(this.name);
    };
    Department3.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department3.prototype.displayEmployee = function () {
        console.log("Total Emp", this.employees.length);
        console.log(this.employees);
    };
    return Department3;
}());
// Inheritance 
// Override Properties & Protected Access Modifier
// setter & getter method 
var Department4 = /** @class */ (function () {
    function Department4(n, id) {
        this.name = n;
        this.id = id; // only once you can initialize
        this.employees = [];
    }
    Department4.prototype.describe = function () {
        console.log(this.name, this.id);
    };
    Department4.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department4.prototype.displayEmployee = function () {
        console.log("Total Emp", this.employees.length);
        console.log(this.employees);
    };
    return Department4;
}());
var AccountingDept = /** @class */ (function (_super) {
    __extends(AccountingDept, _super);
    function AccountingDept(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDept.prototype.addReports = function (text) {
        this.reports.push(text);
    };
    AccountingDept.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDept.prototype.addEmployee = function (emp) {
        if (emp === "Aman") {
            return;
        }
        this.employees.push(emp);
    };
    Object.defineProperty(AccountingDept.prototype, "getReports", {
        get: function () {
            if (this.reports.length > 0) {
                return this.reports;
            }
            throw new Error("Report not found");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDept.prototype, "setReports", {
        set: function (value) {
            if (!value) {
                throw new Error("Please pass value");
            }
            this.reports.push(value);
        },
        enumerable: false,
        configurable: true
    });
    return AccountingDept;
}(Department4));
var accdep = new AccountingDept("d1", []);
// accdep.describe()
// accdep.addReports("Bugs")
// accdep.printReports()
// accdep.describe()
// accdep.addEmployee("Amana")
// accdep.displayEmployee();
// console.log(accdep.getReports)
// accdep.setReports = "bhg2"
// console.log(accdep.getReports)
// static method
var Department5 = /** @class */ (function () {
    function Department5(n, id) {
        this.name = n;
        this.id = id; // only once you can initialize
        this.employees = [];
    }
    Department5.prototype.describe = function () {
        console.log(this.name, this.id);
    };
    Department5.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department5.prototype.displayEmployee = function () {
        console.log("Total Emp", this.employees.length);
        console.log(this.employees);
    };
    Department5.getSalary = function () {
        return {
            salary: 50000
        };
    };
    return Department5;
}());
var salary = Department5.getSalary(); // without creating obj
// console.log(salary)
// abstract classes
var Department6 = /** @class */ (function () {
    function Department6(id, n) {
        this.employess = [];
        this.id = id;
        this.name = n;
    }
    return Department6;
}());
var Subclass = /** @class */ (function (_super) {
    __extends(Subclass, _super);
    function Subclass(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        return _this;
    }
    Subclass.prototype.describe = function () {
        console.log(this.id);
    };
    Subclass.prototype.displayname = function () {
        console.log(this.name);
    };
    return Subclass;
}(Department6));
var subClass = new Subclass("D1", []);
subClass.describe();
