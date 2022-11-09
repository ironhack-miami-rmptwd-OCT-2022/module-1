window.addEventListener("load", () => {
	console.log("scripts loaded");
});

// *******   DATA TYPES *********
// 1. Function - ie: ()
// 2. Object - ie: {}
// 3. Array - ie: []
// 4. Number - ie: 4
// 5. Boolean - ie: false / true
// 6. String - ie: "Hello World"
// 7. Date - ie: new Date()

// ********* ********* *********

// functions can also be called "Method" when they are *'Encapsulated'*(OOP) within some sort of class.
// function declaration
//   |
function whateverYouWant(blah, cb) {
	//                    |
	//                  parameter
}

// when calling a function, the declared paraemter is called the "Argument"
//                    |
whateverYouWant("hello world!");

// ES6 syntax for declaring a function. This is also a good way to bind parameters to functions.
// const theCBFunc = () => "Im the callback!";

const theCBFunc = () => {
	return "Im the callback!";
};

const myObject = {
	func1: () => "Hello World!",
	func2: whateverYouWant("sup", theCBFunc),
	daArray: [
		theCBFunc,
		true,
		"Blah",
		56,
		{ name: "Shirley" },
		[true, [{ numb: 5, liked: false }]],
	],
};

// console.log({theNumber: myObject.daArray[5][1].numb});
console.log({ theNumber: myObject.daArray[5][1][0].numb });

// a funciton that calls on itself is called a recursive function.
