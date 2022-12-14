class Company {
    constructor(){
        this.departments = new Map();
    }

static Employee = class Employee {
    constructor(name, salary, position){
this.name = name;
this.salary = salary;
this.position = position;
    }
// .....................................................
    get name(){
        return this._name;
    }
    set name(value){
if (value === undefined || value === null || value === '') {
    throw new Error('Invalid input!');
}
this._name = value;
    }
// ......................................................
    get salary(){
        return this._salary;
    }
    set salary(value){
if (value === undefined || value === null || value === '') {
    throw new Error('Invalid input!');
}
if (value < 0) {
    throw new Error('Invalid input!');
}
this._salary= value;
    }
// .....................................................
    get position(){
        return this._position;
    }
    set position(value){
if (value === undefined || value === null || value === '') {
    throw new Error('Invalid input!');
}
this._position = value;
    }

}


compareTo (other) {
let result = other.salary - this.salary;
return result === 0 ? this.name.localeCompare(other.name) : result;
}

toString (){
  return  `${this.name} ${this.salary} ${this.position}`;
}

    addEmployee(name, salary, position, department){
        if (department === undefined || department === null || department === '') {
            throw new Error('Invalid input!');
        }

        if (!this.departments.has(department)) {
            this.departments.set(department, []);
        }

        let employee = new Company.Employee(name, salary, position);
        let workers = this.departments.get(department);
        workers.push(employee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
let sortedDepartment = [...this.departments]
.sort(([aName, aWorkers], [bName,bWorkers]) => {
     return this._getAverageSalary(bName) - this._getAverageSalary(aName);
    });
    
let [bestDepartmentName, bestDepartmentWorker] = sortedDepartment[0];
bestDepartmentWorker.sort((a,b) => a.compareTo(b));

let bestDepartmentString = `Best Department is: ${bestDepartmentName}\n 
Average salary: ${this._getAverageSalary(bestDepartmentName).toFixed(2)}`;

let workersString = bestDepartmentWorker.map(x => x.toString()).join('\n');

return `${bestDepartmentString}\n${workersString}`;
}


    _getAverageSalary(departmentName){
let currentDepartment = this.departments.get(departmentName);
let averageSalary = currentDepartment.reduce((acc,w) => acc + w.salary, 0) / currentDepartment.length;
    return averageSalary;
}
}

