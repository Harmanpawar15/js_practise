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

// }

// array for list of job title availaible:
let  availableJobTitles=["Junior Developer","Middle Developer", "Senior Developer"] ;
//console.log(availableJobTitles)

//let availableJobTitles=[1,2,3]


// function to promote employee :

function promoteEmployee ( letobj ,letarray) {
    letobj.jobtitle="Senior Developer" ;
    //console.log(letobj.jobtitle)
    //return letarray;
     for (let i=0 ; i<letarray.length;i++){
        console.log(letarray[i]);
    if (letarray[i]===letobj.jobtitle){
        console.log(`Congratulation ${letobj.name} has been promoted as a Senior developer`)
         return  true ;
         }
         
         else{
             console.log("error")
              return false ;
             
         }
        }
     
}
    //    // console.log("hhh")
    // }
    // else
    //  {
    //     console.log("error ")
    //  }}
    // }

promoteEmployee(employee_1,availableJobTitles);
//console.log(promoteEmployee(availableJobTitles));
