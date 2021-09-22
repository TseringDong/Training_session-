// let a = 1; // Number
// let b = "Hello World"; //String
// let c = true; //boolean
// let d = 1.5 //Float
// // let e = Date.now();

// console.log(a);

// a = "IIMS";

// console.log(a);

// const example = "Hello World";

// console.log(example);

// // example = "IIMS";

// // console.log(example);

// let iims = null;
// console.log(iims);


// let person = {
//     name: "Tendi",
//     age: 24,
//     address: "Boudha",
//     location: {
//         lat: 21.71,
//         lng: 85.32
//     }
// }
// console.log("This person's name is: ",person.name);
// console.log("His address is:", person.address);
// console.log("His date of birth is:", person.birthDate);
// console.log("His location Latitude is:", person.location.lat);
// console.log("His location Longitude is:", person.location.lng);


// let exampleArray = [1, 2, 3, 4, 5];

// console.log(exampleArray);


// join two string and gets its length 
let firstLetter = "Hello";
let secondLetter = "World"; 
let thirdLetter = firstLetter + secondLetter;
console.log(firstLetter + secondLetter);
console.log("length of third letter is:", thirdLetter.length);

// let example = "I am from Kathmandu";
// console.log(example.slice(10,example.lenght));
// console.log(example.slice(5,9));

//slice start index, end index
let example = "Hello World IIMS";
console.log(example.length);
console.log(example.slice(-16,));

// replaceWord
let firstWord = "Hello";
let lastWord = "World";
let replaceWord = "IIMS";
let concatWord = firstWord.concat(lastWord);
console.log(concatWord.replace("World", replaceWord));

// changing to lower case 
let example1 = "TSERING LAMA"; 
console.log("to lower case:", example1.toLowerCase());

// changeing to upper case 
let example2 = "tsering lama";
console.log("to upper case:", example2.toUpperCase());

// trim a string and get length 
let example3 = "   Hello World   ";
console.log("length of example3:", example3.length);
example3 = example3.trim();
console.log("Trimmed value:", example3);
console.log("lenght of example3:", example3.length);


let example4 = 123456;
console.log("First:", typeof example4)
example4 = example.toString();
console.log("Last:", typeof example4);

// get substr
 let str = "Hello World!";
 // console.log(str);
 let result = str.substr(0);
 console.log(result);

// let newStr = "Hello IIMS!";
// console.log(newString);
// let newResult = str.slice (0, 5);
// console.log(newStr);
// console.log(newResult);

// get index of
let checkIndexOf = "Hello World!";
console.log(checkIndexOf.indexOf("World"));

// includes of 
let checkIncludes = "Hello World!";
console.log("check if checkIncludes includes World:",checkIncludes.includes("World"));
console.log("check if checkIncludes includes World:",checkIncludes.includes("iims"));

// check char at 
let checkCharAt =  "I am from Kathmandu";
console.log("checkCharAt:", checkCharAt.charAt(checkCharAt.length-1));

// replace all 
let newWord = "Hello world world";
console.log(newWord.replace("world", "iims"));


// padStart a string and padEnd a string
let padStart = "Hello";
console.log(padStart.padStart(14, "IIMS").includes("NOPe"));

let padEnd = "World";
console.log(padEnd.padEnd(10, "war 2"));