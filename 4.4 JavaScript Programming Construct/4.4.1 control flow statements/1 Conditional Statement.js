// 1. if statement
// 2. if else statement
// 3. if else if statement
// 4. switch statement

// 1. if statement
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote");
}

// 2. if else statement
// let age = 17;
if (age >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}

// 3. if else if statement
// let age = 17;
if (age >= 18) {
    console.log("You are eligible to vote");
}
else if (age < 18 && age >= 13) {
    console.log("You are a teenager");
}
else {
    console.log("You are a kid");
}

// 4. switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}