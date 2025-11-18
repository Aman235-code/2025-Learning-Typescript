console.log("Type Guards");
function add(a, b) {
    // add type guards
    if (typeof (a) === "string" || typeof (b) === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var emp1 = {
    name: "Employ 1",
    privilages: ["create-server"],
    startDate: new Date(),
};
function printEmployeeInfo(emp) {
    console.log(emp.name);
    // console.log(emp.privilages); 
    if ('privilages' in emp) {
        console.log(emp.privilages);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
// printEmployeeInfo(emp1);
// In class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("driving a truck");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("loading Cargo ", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // vehicle.loadCago() // error
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(500);
    }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(400);
    }
}
// useVehicle(v1);
// useVehicle(v2);
// type casting /  type assertion
// const userInput = <HTMLInputElement>document.getElementById("user-input")!; // ! = value must present 
var userInput = document.getElementById("user-input");
userInput.value = "Hello hola";
