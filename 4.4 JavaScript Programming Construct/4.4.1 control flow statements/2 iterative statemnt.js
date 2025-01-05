// 1. while loop    -> It is used to execute a block of statements repeatedly until a condition is satisfied. The condition is evaluated before executing the statements inside the loop. If the condition is false, the loop will not be executed.
// 2. do while loop -> It is used to execute a block of statements repeatedly until a condition is satisfied. The condition is evaluated after executing the statements inside the loop. So, the loop will be executed at
// 3. for loop      -> It is used to execute a block of statements repeatedly for a specified number of times. It consists of three parts: initialization, condition, and increment/decrement.
// 4. for in loop   -> It is used to iterate over the properties of an object. It iterates over the enumerable properties of an object.
// 5. for of loop   -> It is used to iterate over the values of an iterable object like an array, string, etc.

// 1. while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// 2. do while loop
let j = 1;
do {
    console.log(j);
    j++;
}
while (j <= 5);

// 3. for loop
for (let k = 1; k <= 5; k++) {
    console.log(k);
}

// 4. for in loop
let person = { name: "John", age: 30, city: "New York" };
let text = "";
for (let x in person) {
    text += person[x] + " ";
}
console.log(text);

// 5. for of loop
let cars = ["BMW", "Volvo", "Mini"];
let text1 = "";
for (let y of cars) {
    text1 += y + " ";
}
console.log(text1);







