// QUESTION:Write a program to manage employee details. Define a function promoteEmployee that takes an employee object 
//and a new job title as input and updates the employee's job title accordingly. Log appropriate messages for successful
// promotions and for attempting to promote an employee with an invalid job title.

// SOLUTION:

// Detail of empolyee :name,id, jobtitle,salary, department
let employee_1 ={
    name:'John',
    id:123,
    jobtitle:"developer" ,
    salary:80000 ,
    department:"IT"
}
// let employee_2 = {
//     name:'Lily',
//     id:456,
//     jobtitle:"Senior Developer" ,
//     salary:100000 ,
//     department:"Managment"

//}


// function to promote employee :

function promoteEmployee ( letobj , newJob) {

    //update job title of Employee to new job title:
       letobj.jobtitle=newJob;

    // Array of job titles avaiable for promotion:
    let  arrJob=["Junior Developer","Middle Developer", "Senior Developer"] ;
    if(arrJob.includes(newJob)){
        console.log(` Congrates,${letobj.name} has been promoted as ${newJob}`);

    }
    else {
        console.log('Promotion not Recognized')
    }


}
// new job title for promotion:
//let newJobtitle='Developer';
let newJobtitle='Middle Developer' ;

promoteEmployee(employee_1,newJobtitle);