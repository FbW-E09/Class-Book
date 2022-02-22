class Employee {
  constructor(id, firstName, lastName, taxid, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxid = taxid;
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
  constructor(id, firstName, lastName, taxid, salary) {
    // super refers to the parent class, in this case Employee
    // so this call to super calls the parent constructor
    super(id, firstName, lastName, taxid, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
  }

  //   write a method to remove a managed employee
  removeManagedEmployee(employee) {
    const newEmployees = this.managedEmployees.filter(
      (e) => e.id !== employee.id
    );
    this.managedEmployees = newEmployees;
  }
}

const anEmployee = new Employee(1, 'john', 'wick', 456, 60000);
const employee2 = new Employee(3, 'Susan', 'something', 506, 70000);
// console.log(anEmployee);
const aManager = new Manager(2, 'bob', 'wick', 655,  50000);
// console.log(aManager);

const johnsPaySlip = anEmployee.generatePaySlip();
const managersPay = aManager.generatePaySlip();
console.log(managersPay)
// console.log(johnsPaySlip)
// aManager.addManagedEmployee(anEmployee);
// aManager.addManagedEmployee(employee2);
// console.log(aManager);

aManager.removeManagedEmployee(anEmployee);
console.log(aManager);
