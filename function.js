// function exampleFunction(firstName, lastName) {
//     return firstName + " " + lastName;    
// }

// // arrow function  
// const getFullName = (firstName, lastName) => { //  firstName.toUpperCase() +   " " + lastName.toUpperCase();
//     firstName = firstName.toUpperCase();
//     lastName = lastName.toUpperCase();
//     return firstName + " " + lastName;
// }

// console.log(exampleFunction("Tsering", "Lama"));
// console.log(getFullName("Tsering", "Dong"));

let person  =  {
    firstName : "Aayuska",
    lastName :  "Shrestha",
    age : 21,
    address : "Patan" ,  
    boyfriend: "Aayush Sharma",  
    getObject : function () {
        return this;
    },
    getFullName: function() {
       return this.firstName + " " + this.lastName;   
    },
    getAge : function() {
        return this.age;
    },
    getAddress : function() {
        return this.address;
    },
    getBoyfriend : function (){
        return this.boyfriend
    },
};
// console.log("This person's name is:",person.getFullName());
// console.log("This person age is:", person.getAge());
// console.log("This person address is:", person.getAddress());
// console.log("This person boyfriend is:", person.getBoyfriend());
console.log("current object is:",person.getObject());

function printOut(content) {
    console.log(content);
}
printOut("Hello World");

const arrowPrintOut = (content) => console.log(content);
arrowPrintOut("Arrow Hello world");


let car = {
    brand : "Ferrari",
    model : "red",
    price : 3000,

    getNameInUpperCase : function() {
        return this.brand.toUpperCase();
    },
    getTotalPriceWithVAT : function () {
        return (13/100*this.price) + this.price;
    },
};

console.log(car);
console.log(car.getNameInUpperCase());
console.log(car.getTotalPriceWithVAT());
