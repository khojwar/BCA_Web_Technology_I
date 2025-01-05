// 1. Replacing Substrings
let regex = /foo/g;
let res = "foo bar foo".replace(regex, "baz");
console.log(res);

// 2. Extracting Specific Data from a String
let regex1 = /\d+/g;
let res1 = "There are 123 apples and 456 oranges".match(regex1);
console.log(res);

// 3. Validating Email Addresses
let regex2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
console.log(regex2.test("user@example.com"));

// 4. Validating URLs
let regex3 = /^(http|https):\/\/[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,6}/;
console.log(regex3.test("http://www.example.com"));

// 5. Validating Dates
let regex4 = /^\d{2}\/\d{2}\/\d{4}$/;
console.log(regex4.test("12/25/2018"));

// 6. Validating Phone Numbers which is start with 98 and total length is 10 (eg. 9867163083, 9856236633, 9841234567)
let regex5 = /^98\d{8}$/;
console.log(regex5.test("9867163083"));

// 7. Validating Passwords which contain at least one digit, one lowercase letter, one uppercase letter, one special character and at least 8 characters
let regex6 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
console.log(regex6.test("Password@123"));


// 9. Validating HTML Tags
let regex8 = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/;
console.log(regex8.test("<p>"));








