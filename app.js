function employee(ID, fullname, department, level) {

    this.ID = ID,
        this.fullname = fullname,
        this.department = department,
        this.level = level;
    this.salary = salaryy(level);

}

let employee1 = new employee(1000, " Ghazi samer ", "Administration", "Senior");
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
    //******************************************************************************* */
    const main=document.querySelector("main")

    const table=document.createElement ("table"); 
    main.appendChild(table);
    
    const thead=document.createElement ("thead");
    table.appendChild(thead);

    let th1=document.createElement("th");
    thead.appendChild(th1);
    th1.textContent="Employee ID";

    let th2=document.createElement("th");
    thead.appendChild(th2);
    th2.textContent="Full Name";

    let th3=document.createElement("th");
    thead.appendChild(th3);
    th3.textContent="Department";

    let th4=document.createElement("th");
    thead.appendChild(th4);
    th4.textContent="Level";

    let th5=document.createElement("th");
    thead.appendChild(th5);
    th5.textContent="Salary";

    let row1= document.createElement("tr");
    table.appendChild(row1);

    
    for (let i=0 ; i<test1.length;i++ ) {
    const column1= document.createElement("td");
    row1.appendChild(column1);
    column1.textContent= test1[i];

    }
    

    
    let row2= document.createElement("tr");
    table.appendChild(row2);

    
    for (let i=0 ; i<test2.length;i++ ) {
    const column2= document.createElement("td");
    row2.appendChild(column2);
    column2.textContent= test2[i];

    }


    
    let row3= document.createElement("tr");
    table.appendChild(row3);

    
    for (let i=0 ; i<test3.length;i++ ) {
    const column3= document.createElement("td");
    row3.appendChild(column3);
    column3.textContent= test3[i];

    }

    
    let row4= document.createElement("tr");
    table.appendChild(row4);

    
    for (let i=0 ; i<test4.length;i++ ) {
    const column4= document.createElement("td");
    row4.appendChild(column4);
    column4.textContent= test4[i];

    }

    
    let row5= document.createElement("tr");
    table.appendChild(row5);

    
    for (let i=0 ; i<test5.length;i++ ) {
    const column5= document.createElement("td");
    row5.appendChild(column5);
    column5.textContent= test5[i];

    }

     
    let row6= document.createElement("tr");
    table.appendChild(row6);

    
    for (let i=0 ; i<test6.length;i++ ) {
    const column6= document.createElement("td");
    row6.appendChild(column6);
    column6.textContent= test6[i];

    }

     
    let row7= document.createElement("tr");
    table.appendChild(row7);

    
    for (let i=0 ; i<test7.length;i++ ) {
    const column7= document.createElement("td");
    row7.appendChild(column7);
    column7.textContent= test7[i];

    }