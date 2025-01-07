/*
** Creating Objects in JavaScript **    

There are 3 ways to create objects.
    1.	By object literal
    2.	By creating instance of Object directly (using new keyword)
    3.	By using an object constructor (using new keyword)
*/

// 1. By object literal
// let obj = { 
//     name: 'John', 
//     age: 30, 
//     city: 'New York' 
// };

// console.log(obj.name);

// // 2. By creating instance of Object directly (using new keyword)
// let obj1 = new Object();
// obj1.name = 'John';
// obj1.age = 30;
// obj1.city = 'New York';

// console.log(obj1.name);




// 3. By using an object constructor (using new keyword)
// function Person(name, age, city) {
//     // console.log(this);
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }
// let obj2 = new Person('John', 30, 'New York');

// console.log(obj2.name);



// Defining method in JavaScript Object
// We can define method in JavaScript object. But before defining method, we need to add property in the function with same name as method.

// function emp(id,name,salary){  
//     this.id=id;  
//     this.name=name;  
//     this.salary=salary;  
      
//     this.changeSalary=changeSalary;  
    
//     function changeSalary(otherSalary){  
//     this.salary=otherSalary;  
//     }  
// } 

// e=new emp(103,"Sonoo Jaiswal",30000);  

// console.log(e.id+" "+e.name+" "+e.salary);  
// e.changeSalary(45000);  

// console.log(e.id+" "+e.name+" "+e.salary);  






function mahalaxmi(name,cash){
    this.name = name;  // properties
    this.cash = cash;

    this.deposite = deposite
    this.details = details;
    
    // method
    function deposite(dcash){
        this.cash += dcash;
    }

    function details(){
        console.log(this.name + ' has ' + this.cash + ' cash');
    }
}

let m = new mahalaxmi('mahalaxmi', 1000);  // object

m.deposite(1000);  // access method
console.log(m.cash);

m.details();



