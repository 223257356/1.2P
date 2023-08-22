// Create new Date object
const newDate = new Date();

// Get current date and time    
console.log("1. Current date and time: " + newDate);

// Get current year
const currentYear = newDate.getFullYear();
console.log("2. Current year: " + currentYear);

// Get current day of the week 
const currentDayOfWeek = newDate.getDay();
console.log("3. Current day of the week: " + currentDayOfWeek);

// Set specific year, month and date
newDate.setFullYear(2019);
newDate.setMonth(5);
newDate.setDate(9);
console.log("4. Set specific year, month and date: " + newDate);

// Get current milliseconds from the specific date
const specificDateMilliseconds = newDate.getTime();
console.log("5. Time in milliseconds on the Sun Jun 09 2019:", specificDateMilliseconds);
