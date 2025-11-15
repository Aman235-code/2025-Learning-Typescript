console.log("This is a class")

class Department {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    describe(this: Department) {
        console.log("Dept", this.name);
    }
}

const accounting = new Department("Accounting")
// accounting.describe();

const copy = {
    name: "Accounting2",
    describe: accounting.describe
}
// copy.describe()

// Access Modifiers
class Department2 {
    name: string;
    private employees: string[];
    constructor(n: string) {
        this.name = n;
        this.employees = []
    }
    describe() {
        console.log(this.name)
    }

    addEmployee(emp: string) {
        this.employees.push(emp)
    }
    displayEmployee() {
        console.log("Total Emp", this.employees.length);
        console.log(this.employees)
    }
}

const acc = new Department2("ACC");
// acc.describe()
acc.addEmployee("Emp1")
acc.addEmployee("Emp2")
// acc.displayEmployee();
// acc.employees = ["emp3"] // error 

// readonly
class Department3 {
    name: string;
    private employees: string[];
    private readonly id: string;
    constructor(n: string) {
        this.name = n;
        this.id = "d1"; // only once you can initialize
        this.employees = []
    }
    describe() {
        // this.id = "d2" // error
        console.log(this.name)
    }

    addEmployee(emp: string) {
        this.employees.push(emp)
    }
    displayEmployee() {
        console.log("Total Emp", this.employees.length);
        console.log(this.employees)
    }
}

// Inheritance 
// Override Properties & Protected Access Modifier
// setter & getter method 
class Department4 {
    name: string;
    protected employees: string[];
    private readonly id: string;
    constructor(n: string, id: string) {
        this.name = n;
        this.id = id; // only once you can initialize
        this.employees = []
    }
    describe() {
        console.log(this.name, this.id)
    }

    addEmployee(emp: string) {
        this.employees.push(emp)
    }
    displayEmployee() {
        console.log("Total Emp", this.employees.length);
        console.log(this.employees)
    }
}

class AccountingDept extends Department4 {
    constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
    }

    addReports(text: string) {
        this.reports.push(text)
    }
    printReports() {
        console.log(this.reports)
    }

    addEmployee(emp: string): void {
        if (emp === "Aman") {
            return;
        }
        this.employees.push(emp);
    }

    get getReports() {
        if (this.reports.length > 0) {
            return this.reports
        }
        throw new Error("Report not found")
    }

    set setReports(value: string) {
        if (!value) {
            throw new Error("Please pass value")
        }
        this.reports.push(value);
    }
}

const accdep = new AccountingDept("d1", []);
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
class Department5 {
    name: string;
    protected employees: string[];
    private readonly id: string;
    constructor(n: string, id: string) {
        this.name = n;
        this.id = id; // only once you can initialize
        this.employees = []
    }
    describe() {
        console.log(this.name, this.id)
    }

    addEmployee(emp: string) {
        this.employees.push(emp)
    }
    displayEmployee() {
        console.log("Total Emp", this.employees.length);
        console.log(this.employees)
    }
    static getSalary() {
        return {
            salary: 50000
        }
    }
}
const salary = Department5.getSalary() // without creating obj
// console.log(salary)

// abstract classes
abstract class Department6 {
    name: string;
    protected employess: string[] = [];
    protected readonly id: string;

    constructor(id: string, n: string) {
        this.id = id;
        this.name = n;
    }
    abstract describe(): void;
    abstract displayname(): void;

}

class Subclass extends Department6 {
    constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
    }
    describe(): void {
        console.log(this.id)
    }
    displayname(): void {
        console.log(this.name)
    }
}

const subClass = new Subclass("D1", []);
subClass.describe()