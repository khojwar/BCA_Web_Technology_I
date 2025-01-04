// function
// function is a block of code that can be called by name. 
// The code inside a function can be executed when the function is invoked (called).

// function syntax
// function name(parameter1, parameter2, parameter3) {
//   // code to be executed
// }

// function example
// function myFunction(a, b) {
//     console.log(a*b);
//   }
  
// myFunction(4, 3);


// --------- Parameters vs Arguments --------------

// function repeatName(name) { // here name is a parameter
//   return name.repeat(10)
//    }

// //Function Call
// console.log(repeatName("Anna ")) //  here “Anna” is an argument  


// ---------- Return Statement --------------
// The return statement ends function execution and specifies a value to be returned to the function caller.

// example
// function myFunction(a, b) {
//     return a * b;
//   }

//   console.log(myFunction(4, 3)); // 12


// Example with Early Return
function checkEven(number) {
  if (number % 2 === 0) {
    return "Even"; // Returns "Even" and exits the function
  }
  return "Odd"; // Returns "Odd" if the previous condition was false
  }

console.log(checkEven(4)); 
console.log(checkEven(7)); 
    
