// control flow modifier.js 
// 1. break statement
// 2. continue statement

// 1. break statement
// The break statement is used to terminate the loop or switch statement. It is used inside the loop or switch statement to exit the loop or switch statement.
// Syntax:
// break;
// Example:
let i = 1;
while (i <= 5) {
    if (i === 3) {
        break;
    }
    console.log(i);
    i++;
}

// 2. continue statement
// The continue statement is used to skip the current iteration of the loop and continue with the next iteration. It is used inside the loop statement to skip the current iteration and continue with the next iteration.
// Syntax:
// continue;
// Example:
let j = 1;
while (j <= 5) {
    if (j === 3) {
        j++;
        continue;
    }
    console.log(j);
    j++;
}


