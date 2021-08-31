//Employee JSON object
var employee = {

    "firstname":"Lanka",
    "lastname":"Laxmi Srinivasa Naresh",
    "salary":50000,
    "designation":"Web Developer"

}
console.log("My salary is: "+employee.salary);

//JSON array

var employees =[
    {"firstname":"Lanka",
     "lastname":"Naresh",
     "salary":50000,
     "Designation":"Web Developer"
    },
    {"firstname":"Durga",
     "lastname":"Prasad",
     "salary":30000,
     "Designation":"Web Designer"
    },
    {"firstname":"Venkat",
     "lastname":"Sai",
     "salary":25000,
     "Designation":"Chef"
    },
    {"firstname":"Murali",
     "lastname":"Krishna",
     "salary":40000,
     "Designation":"C.A"
    }
]
employees.forEach(function(employee){

    console.log(employee.firstname + " " +employee.lastname+ " is an Employee. His designation is " +employee.Designation+ " and his salary is " +employee.salary+ " ");
});