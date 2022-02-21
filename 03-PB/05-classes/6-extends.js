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

class Manager extends Employee {
  constructor(id, firstName, lastName, dl, ssn, salary) {
    // super refers to the parent class, in this case Employee
    // so this call to super calls the parent constructor
    super(id, firstName, lastName, dl, ssn, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
  }

  //   write a method to remove a managed employee
  removeManagedEmployee(employee) {
    this.managedEmployees.map((e) => e.name);
  }
}

const anEmployee = new Employee(1, 'john', 'wick', 456, 1234455, 60000);
const anotherEmployee = new Employee(3, 'Nic', 'Cage', 456, 1234455, 60000);
console.log(anEmployee);
const aManager = new Manager(2, 'bob', 'wick', 655, 20935, 50000);
console.log(aManager);
aManager.addManagedEmployee(anEmployee);
aManager.addManagedEmployee(anotherEmployee);
console.log(aManager);
aManager.removeManagedEmployee(anEmployee);
console.log(aManager);
