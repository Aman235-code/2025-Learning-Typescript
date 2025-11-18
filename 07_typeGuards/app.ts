console.log("Type Guards")

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; // both

function add(a: Combinable, b: Combinable) {
    // add type guards
    if (typeof (a) === "string" || typeof (b) === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

// console.log(add(12, 56))
// console.log(add("30", 30))

type Admin = {
    name: string;
    privilages: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

type UnknownEmployee = Employee | Admin;

const emp1: ElevatedEmployee = {
    name: "Employ 1",
    privilages: ["create-server"],
    startDate: new Date(),
}

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log(emp.name)
    // console.log(emp.privilages); 

    if ('privilages' in emp) {
        console.log(emp.privilages)
    }

    if ('startDate' in emp) {
        console.log(emp.startDate)
    }
}

// printEmployeeInfo(emp1);

// In class
class Car {
    drive() {
        console.log("driving...")
    }
}

class Truck {
    drive() {
        console.log("driving a truck")
    }
    loadCargo(amount: number) {
        console.log("loading Cargo ", amount)
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    // vehicle.loadCago() // error

    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(500)
    }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(400);
    }
}

// useVehicle(v1);
// useVehicle(v2);

// type casting /  type assertion

// const userInput = <HTMLInputElement>document.getElementById("user-input")!; // ! = value must present 
const userInput = document.getElementById("user-input")! as HTMLInputElement

userInput.value = "Hello hola"


