// #############################################
// Set 1: Advanced Syntax, Types, and Quirks
// #############################################

// Exercise 1: Complex Arithmetic and Standard Rules
var exerciseOneResults = 3 + 5 * (10 / 2) - (8 - 4);
console.log(exerciseOneResults);

// Exercise 2: Case Sensitivity Test
var projectIdentifier = "COMP484";
ProjectIdentifier = "JS_Advanced";

/*
The line above would not change projectIdentifier, because
JavaScript is case sensitive. "projectIdentifier" and "ProjectIdentifier"
are treated as different identifiers.
*/

// Correct reassignment using the exact same identifier.
projectIdentifier = "JS_Advanced";
console.log(projectIdentifier);

// Exercise 3: String Quoting Challenge
var courseDescription =
  "The course is \"interactive\" and involves 'scripting' logic.";

// Exercise 4: Escaping and Console Output
var errorMessage = 'An internal server error occurred: "Access Denied"';
console.log(errorMessage);

// Exercise 5: Type Coercion with Non-Plus Operators
var valueA = 10; // number
var valueB = "4"; // string

var resultSubtraction = valueA - valueB; // "4" coercied into number
var resultMultiplication = valueA * valueB; // "4" coercied into number

console.log("resultSubtraction:", resultSubtraction);
console.log("resultMultiplication:", resultMultiplication);
console.log("typeof resultSubtraction:", typeof resultSubtraction);
console.log("typeof resultMultiplication:", typeof resultMultiplication);

// #############################################
// Set 2: Operators and Type Theory
// #############################################

// Exercise 6: Understanding null and undefined Types
var unassignedVar; // declared but not assigned undefined
var explicitNull = null; // explicitly set to null

console.log("typeof unassignedVar:", typeof unassignedVar); // "undefined"
console.log("typeof explicitNull:", typeof explicitNull); // "object"

/*
The null data type is the intentional
absence of an object value.
If we want a variable to be empty, but not
undefined, you set its value to null.
The undefined data type is what you get
when you create a variable but don't set it
to anything.
*/

// Exercise 7: Boolean Assignment and Type Identification
var isBlocking = true;
console.log(typeof isBlocking); // Boolean

// Reassign the same variable to a string value.
isBlocking = "true";
console.log(typeof isBlocking); // string

// Exercise 8: Invalid Variable Naming
// The following declarations are commented out because they are invalid syntax:

// var 1invalidName = 10;    // This is invalid because variable names cannot start with a number.
// var invalid name = "Alice";  // This is invalid because spaces are not allowed in variable names.
// var invalidName# = 5;          // This is invalid because symbols like # are not allowed in variables.

// Exercise 9: Chained Shorthand Arithmetic
var counterValue = 50;
counterValue /= 5; // counterValue = counterValue / 5 → 10
counterValue -= 3; // counterValue = counterValue - 3 → 7
console.log(counterValue);

// Exercise 10: Prefix vs. Postfix Unary Operators

// Part 1: Postfix unary
var x = 10;
var y_post = x++;

// With postfix unary x++, the value of x is returned first and then x is incremented to 11.
console.log("y_post:", y_post); // 10
console.log("x after y_post assignment:", x); // 11

// Part 2: Prefix unary
x = 10; // re-asign
var z_pre = ++x;

// With prefix unary ++x, x is incremented first and then the new value is returned.
console.log("z_pre:", z_pre); // 11
console.log("x after z_pre assignment:", x); // 11

// #############################################
// Set 3: Advanced Logic and Comparisons
// #############################################

// Exercise 11: Loose Equality and Coercion
var testNumber = 0; // number
var testBoolean = false; // boolean

if (testNumber == testBoolean) {
  console.log("0 and false are loosely equal with ==");
}
/*
 Using == causes JavaScript to perform type coercion. This comparison has
 false converted to 0, so 0 == 0 evaluates to true.
*/

// Exercise 12: Strict Inequality Test
var versionA = 10.0; // number
var versionB = "10.0"; // string

if (versionA !== versionB) {
  console.log("versionA and versionB are not strictly equal.");
} else {
  console.log("versionA and versionB are strictly equal.");
}

// Exercise 13: Logical OR and AND Combination
var isLoggedIn = true;
var isSubscriber = false;
var isTrialExpired = true;

if ((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

// Exercise 14: Simulating XOR using Nested Conditionals
var conditionA = true;
var conditionB = false;

// if either conditionA or conditionB have to be true but they also both can't be true
if ((conditionA || conditionB) && !(conditionA && conditionB)) {
  console.log("XOR Success");
} else {
  console.log("XOR Fail");
}

// Exercise 15: Converting IF/ELSE to Ternary Operator
var scriptLoadType = "deferred";
var loadStatus;

// Standard if/else
if (scriptLoadType === "deferred") {
  loadStatus = "Non-blocking";
} else {
  loadStatus = "Potentially Blocking";
}

// Ternary operator version
var loadStatusTernary =
  scriptLoadType === "deferred" ? "Non-blocking" : "Potentially Blocking";

// #############################################
// Set 4: Integration and Application
// #############################################

// Exercise 16: Commenting and Code Structure

/*
calculateRenderTime:
This function is for calculating the time
taken to parse HTML and execute JavaScript.
it is definened by the function key word followed by 
the function name in camel case.
the function the has "()" where you input argumnets then
"{}" where the body of the function goes.
*/
function calculateRenderTime() {
  // Placeholder: implementation would go here.
}

// Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)
var todayDate = new Date();

var month = todayDate.getMonth() + 1; // Months are zero-indexed, so add 1.
var day = todayDate.getDate();
var year = todayDate.getFullYear();

// This will add the leading zero to make sure MM and DD are always two digits.
if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}

var formattedDate = "Today is " + month + "/" + day + "/" + year;
console.log(formattedDate);

// Exercise 18: Mixed Type Arithmetic Explanation
var val1 = 20; // number
var val2 = "5"; // string

var sumResult = val1 + val2; // "+" with a string causes concatenation.
var diffResult = val1 - val2; // "-" coerces string to number.

console.log("sumResult:", sumResult);
console.log("diffResult:", diffResult);

/*
For sumResult when using the "+" operator with one operand as a string,
JavaScript performs string concatenation. The number 20 is converted to
the string "20", and then concatenated with "5", producing "205".
For diffResult when using the "-" operator, JavaScript doesn't do string
concatenation. Instead, it attempts to convert both operands to numbers.
"5" becomes 5, so 20 - 5 results in 15.
*/

// Exercise 19: Conditional based on Type Check
var dataInput = 484; // numeric value

if (typeof dataInput === "number") {
  console.log("Input is numeric.");
} else {
  // If the type were not "number", reassign and log.
  dataInput = true;
  console.log(typeof dataInput);
}

// Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual)

// Standard JavaScript code sequence necessary to inject an <h1> element containing the text "Interactive Layer Loaded" into the document body.
var headingElement = document.createElement("h1");
headingElement.innerHTML = "Interactive Layer Loaded";
document.body.appendChild(headingElement);

/*
 If the following DOM manipulation code is placed in the <head> of an HTML
 document without the "defer" or "async" attributes on the script tag,
 it will run as soon as the script is parsed.
 this mean that the script will run before the browser
 has gotten to parsing the <body> element.

 In that situation, if we tried to use document.body.appendChild(...) on an
 <body> element that has yet to be rendered, it would cause an error because the
 element does not exist in the DOM yet.
 */
