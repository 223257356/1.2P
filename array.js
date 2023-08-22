// An array of universities
const university = ["Deakin University","Monash University","Swinburne University", "University of Melbourne"];

// An array of numbers
const numbers = [0,1,2,3,4,5,6,7,8,9,10];

// Lengths of university and numbers arrays
console.log("1. Length of university array: ", university.length);
console.log("2. Length of numbers array: ", numbers.length);

// Finding index of Monash University
const index = university.indexOf("Monash University");
console.log("3. Index of Monash University: ", index);

// Adding an element to the end of university array 
university.push("RMIT");
console.log("4. Array with 'RMIT' added: ", university);

// Sort the number array in descending order
numbers.sort((a,b) => b - a);
console.log("5. Numbers array in descending order: ", numbers);

// Concatenate university array and numbers array
const universityAndNumbers = university.concat(numbers);
console.log("6. University and numbers array: ", universityAndNumbers);