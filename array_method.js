// let exampleArray = [1, 2, 3, 4, 5]; 
// console.log(exampleArray.length);
// console.log(exampleArray[exampleArray.length - 1]);


// exampleArray[2] = "test"; 
// exampleArray[3] = "hello world"

// // let objectExample  = { 
// //     name: "john",
// //     age: 30,
// // }; 

// let array1 = ["apple", "mango"];
// let array2 = ["orange", "banana"];
// console.log([...array1, ...array2]);

// let object1 = {
//     name: "Tsering",
//     age: 22,
// };

// let object2 = {
//     address: "Boudha",
//     College: "IIMS",
// };

// let object3 = {...object1, ...object2};

// let {name, age, address, college} = object3; 
// console.log("~file: array_methods.js ~", name, age, address, college)

// //push 
// let pushExample = ["apple", "banana"];
// pushExample.push("orange");
// console.log("~ file: array_method.js ~ line 35 ~ pushExample", pushExample); 

// // pop 
// let popExample = ["apple", "banana", "avocado"];
// popExample.pop("orange");
// console.log("~ file: array_method.js ~ line 35 ~ popExample", popExample);

// // shift 
// let shiftExample = ["apple", "banana", "avocado"];
// shiftExample.shift();
// console.log("~ file: array_method.js ~ line 45 ~ popExample", popExample);


// // map
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.map((value, index) => {
//      return value * 2;
// });
// console.log("file: array_methods.js ~ numbers:", numbers);
// console.log("file:  array_methods.js ~ numbers:", newNumbers);


// let name = ["happy birthday lani"];
// console.log(name);

// let upperCaseName = name.map((value, index)=>{
//     return value.toupperCaseName();
// });
// console.log(upperCaseName);


// filter example 

let agesArray = [15, 20, 35];
console.log(agesArray);

let aboveTwenty = agesArray.filter((value, index) => {
   return value > 20;  
});

console.log(aboveTwenty);
