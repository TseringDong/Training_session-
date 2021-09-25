// seTimeout 

const printHelloWorld = () => {
    console.log("Hello World, this is setTimeout");
};

let counter =0; 
// setInterval
const printHelloWorld = () => {
    counter++;
    console.log("counter: ", counter);

setTimeout(printHelloWorld, 5000);

setInterval(printHelloWorld, 2000);