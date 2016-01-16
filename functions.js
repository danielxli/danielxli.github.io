// Function Declaration
// Gets stored in memory. Available for use anywhere in the page. Can call sayHello above or below the declaration.
function sayHello() {
  console.log('Hello World')
}

// Function Expression
// Has to be called below the expression.
// Don't use these
var sayGoodbye = function() {
  console.log('Goodbye World')
}

function sumTwoNums(numOne, numTwo) {
  return numOne + numTwo
}
