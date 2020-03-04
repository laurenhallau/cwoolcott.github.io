
// Convert js to ts, then add "export { }" to top
// assign let/const and Basic types
// Yypes = boolean, number, string, any, unknown, null
// Basic Types: let {varname}: {type} = {value};
// Union Types: let {varname}: {type} | {type} = {value};

var petName = "Mr. Pants";
var petType = "cat";
var petAge = 10;
var isSleeping = true;
var nextYearAge = petAge + 1;

var petGreeting = `${petName} is a ${petType}. Next year ${petName} will be ${nextYearAge} years old.`;

if (isSleeping) {
    isSleeping = 8;
}

var sleepingStatus = `${petName} has been sleeping for ${isSleeping} hours.`;

console.log(petGreeting);
console.log(sleepingStatus);



