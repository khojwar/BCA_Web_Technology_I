const { type } = require("express/lib/response");

// json object
const jsonData = '{ "name": "John", "age": 22 }';

// converting to JavaScript object
const obj = JSON.parse(jsonData);

// checking the type
console.log(typeof obj); // object


// accessing the data
console.log(obj.name); // John
