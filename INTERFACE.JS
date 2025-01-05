// Define a "interface" object with methods that need to be implemented
const VehicleInterface = {
  startEngine: function() {
    throw new Error("Method 'startEngine()' must be implemented.");
  },
  stopEngine: function() {
    throw new Error("Method 'stopEngine()' must be implemented.");
  }
};

// A class that implements the "interface"
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Implement the methods defined in VehicleInterface
  startEngine() {
    console.log(`${this.make} ${this.model} engine started.`);
  }

  stopEngine() {
    console.log(`${this.make} ${this.model} engine stopped.`);
  }
}

// A class that does not implement the interface properly
class Bike {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log(`${this.make} ${this.model} engine started.`);
  }

  // Missing implementation of stopEngine
}

// Function to check if an object adheres to the "interface"
function checkInterfaceImplementation(obj, interface) {
  for (let method in interface) {
    if (typeof obj[method] !== 'function') {
      throw new Error(`Class does not implement method: ${method}`);
    }
  }
}

// Create instances
const myCar = new Car('Toyota', 'Corolla');
const myBike = new Bike('Honda', 'CBR');

// Check if the instances adhere to the "interface"
try {
  checkInterfaceImplementation(myCar, VehicleInterface);
  console.log('Car adheres to the VehicleInterface.');
} catch (e) {
  console.log(e.message);
}

try {
  checkInterfaceImplementation(myBike, VehicleInterface);
  console.log('Bike adheres to the VehicleInterface.');
} catch (e) {
  console.log(e.message);
}

// Use the methods
myCar.startEngine(); // Output: Toyota Corolla engine started.
myCar.stopEngine();  // Output: Toyota Corolla engine stopped.