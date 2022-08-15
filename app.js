function employee(ID, fullname, department, level) {

    this.ID = ID,
        this.fullname = fullname,
        this.department = department,
        this.level = level;
    this.salary = salaryy(level);

}

let employee1 = new employee(1000, " Ghazi samer ", "Administration", "Senior")
let employee2 = new employee(1001, "Lana Ali", "Finance", "Senior");
let employee3 = new employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let employee4 = new employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let employee5 = new employee(1004, "Omar Zaid", "Development", "Senior");
let employee6 = new employee(1005, "Rana Saleh", "Development", "Junior");
let employee7 = new employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
function salaryy(level) {

    let salary;
    if (level == "Senior") {

        salary = Math.floor(Math.random() * 2000) + 1500;
    }

    else if (level == "Mid-Senior") {

        salary = Math.floor(Math.random() * 1500) + 1000;
    }
    else if (level == "Junior") {

        salary = Math.floor(Math.random() * 1000) + 500;
    }
    return salary;
}
render();

function render() {
    console.log("Name : " + employee1.fullname + " , Salary =" + employee1.salary);
    console.log("Name : " + employee2.fullname + " , Salary =" + employee2.salary);
    console.log("Name : " + employee3.fullname + " , Salary =" + employee3.salary);
    console.log("Name : " + employee4.fullname + " , Salary =" + employee4.salary);
    console.log("Name : " + employee5.fullname + " , Salary =" + employee5.salary);
    console.log("Name : " + employee6.fullname + " , Salary =" + employee6.salary);
    console.log("Name : " + employee7.fullname + " , Salary =" + employee7.salary);
}
let test1 = Object.values(employee1);
let test2 = Object.values(employee2);
let test3 = Object.values(employee3);
let test4 = Object.values(employee4);
let test5 = Object.values(employee5);
let test6 = Object.values(employee6);
let test7 = Object.values(employee7);


console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);



    // console.log( Math.floor( ( Math.random() * myEndPattern ) + 1 ) );