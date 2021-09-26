// const getHelloWorldPromise = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Hello world");
//         //  reject("There was some error"); 
//     });
//     return Promise.resolve(["direct", "resolve"])
//     //  return  Promise.reject(["this function failed"])
// };

// const getHelloWorldPromise = (throwError) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if  (!throwError){
//                 resolve("Hello world");
//             }else {
//                 reject("error");   
//             }     
//         }, 1000

// });

// getHelloWorldPromise()
//     .then((result) => {
//     console.log("Success:", result);
//     return true  
// })
// .then ((Hello) => {
//     console.log("Next Promise:", Hello);
// })

// .catch((error) => {  //error handling 
//     console.log(error);
// });

// // example1 
// const getUserList = () => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//              // resolve(["Tsering", "Tendi"])
//               reject("there was some error fetching student data")
//         }, 2000);

//      });
// }
// getUserList().then(student => {
//     console.log("success:", student);
// })
// // .catch((error) =>  console.log(error)); //single line .catch callback
// .catch((error) => console.log(error))
// .finally(() => console.log("Request complete"));  // argument uis always empty  

// Promise.all 
// const promise1 = () =>
//     new Promise((resolve, reject) => {
//          setTimeout(() => {
//         resolve("Promise 1");
//     }, 3000);
// });

// const promise2 = () => 
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise2");
//     }, 2000);
// });

// Promise.all([promise2(), promise1()]).then((result) => {
//     console.log("Promise all:", result);
// }).catch((error) => {
//     console.log("Error:",  error);
// });

// Promise.race
// Promise.race([promise2(), promise1()]).then((result) => {
//     console.log("Promise all:", result);
// }).catch((error) => {
//     console.log("Error:",  error);
// });


const yahooWeatherAPI = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                kathmandu: 20,
            }, 1000);
        });
    });

const googleWeatherAPI = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                kathmandu: 19,
            }, 2000);
        });
    });    

Promise.race([yahooWeatherAPI(), googleWeatherAPI()])
    .then((result) => {
        console.log("Weather update:", result);
})
    .catch((error) => {
     console.log("Error:", error);
});
