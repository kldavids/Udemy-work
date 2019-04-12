//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
// const addToTen = 10 => y => 10 + y
// addToTen(3) --- 10 + 3
//answer is 13


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
// const sum = (a, b) => a + b
// const curriedSum = (30) => (1) => 30 + 1
// curriedSum(30)(1)
// answer is 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
// const curriedSum = (5) => (b) => 5 + b
// const add5 = curriedSum(5)
// add5(12)
// answer is 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// const compose = (f, g) => (a) => add1(add5(10));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)
// add5(10) -- 15
// add1(15) -- 16
// answer is 16


//What are the two elements of a pure function?
// 1. No side effects
// 2. Always return something

