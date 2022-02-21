// the concept of class was introduced in ECMA2015.

// Internally a class is a wrapper over prototype based inheritance(methods and properties).

// constructors provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.

// class is a syntactical sugar over prototype based object oriented programming.

// It also gives you a better encapsulation of data and methods in the same code block since all the data and methods are defined in the same code block.

// class syntax is more comparable to similar features available in Java and C++

// The basic syntax is:

// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
// }

// Then use new MyClass() to create a new object with all the listed methods.

// The constructor() method is called automatically by new, so we can initialize the object there.

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// const user = new User('John');
// user.sayHi();

class Employee {
  constructor(id, firstName, lastName, dl, ssn, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dl = dl;
    this.ssn = ssn;
    this.salary = salary;
  }
  generatePaySlip() {
    const monthlySalary = this.salary / 12;
    return `Employee ID: ${this.id}
        Name: ${this.firstName} ${this.lastName}
        Pay: ${monthlySalary}
        `;
  }
}

const anEmployee = new Employee(1, 'john', 'wick', 456, 1234455, 60000);
console.log(anEmployee);

class Computer {
  // Graphic card, RAM, CPU, SSD
  constructor(graphicCard, ram, gpu, ssd) {
    this.graphicCard = graphicCard;
    this.ram = ram;
    this.gpu = gpu;
    this.ssd = ssd;
  }
}

const myComputer = new Computer('intel 7200', 5000, 5000, 50000);
console.log(myComputer);
