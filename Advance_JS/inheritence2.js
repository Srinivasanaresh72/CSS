class Employee{
    constructor(){
        this.salary = 70000;
    }
    getsalary(){
        console.log(this.salary);
    }
}
class contractEmployee extends Employee{
    constructor(){
        super();
        this.contractperiod = '2 Years';
    }
    getcontractEmployeeSalary(){
        console.log(this.salary * 2);
    }
    getcontractPeriod(){
        console.log(this.contractperiod);
    }
}

c1= new contractEmployee();
c1.getcontractEmployeeSalary();
c1.getcontractPeriod();