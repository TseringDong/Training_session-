const request = require('request');
const getUsersApi1 = () => {
  return new Promise((resolve, reject) => {
    request(
        "https://reqres.in/api/users",
        (error, response, body) => {
            if (error) {
                reject(error);
            }
            resolve({
                "page": 1,
                "per_page":6,
                "total": 12,
                "data": 
                    {
                        "id": 1,
                        "email": "george.bluth@reqres.in",
                        "first_name": "George",
                        "last_name": "Bluth",
                        "avatar": "https://reqres.in/img/faces/1-image.jpg"
                    },
                
            });
        }
    );
  });
}

const getUsersApi2 = () => {
    return new Promise((resolve, reject) => {
      request(
          "https://reqres.in/api/users",
          (error, response, body) => {
              if (error) {
                  reject(error);
              }
              resolve({
                  "page": 1,
                  "per_page":6,
                  "total": 12,
                  "data": 
                      {
                          "id": 2,
                          "email": "janet.weaver@reqres.in",
                          "first_name": "Janet",
                          "last_name": "Weaver",
                          "avatar": "https://reqres.in/img/faces/2-image.jpg"
                      },
                  
              });
          }
      );
    });
 }

 const getUsersApi3 = () => {
    return new Promise((resolve, reject) => {
      request(
          "https://reqres.in/api/users",
          (error, response, body) => {
              if (error) {
                  reject(error);
              }
              resolve({
                  "page": 1,
                  "per_page":6,
                  "total": 12,
                  "data": 
                      {
                          "id": 3,
                          "email": "emma.wong@reqres.in",
                          "first_name": "Emma",
                          "last_name": "Wong",
                          "avatar": "https://reqres.in/img/faces/3-image.jpg"
                      },
                  
              });
          }
      );
    });
 }

// Single Promise 
getUsersApi1()
.then((result) => {
    console.log("users api 1", result);
})
.catch((error) => {
    console.log("error:", error);
});

// Promise.all
console.log("---------------------------");
console.log("THIS IS PROMISE.ALL RESULT");
console.log("----------------------------");
Promise.all([getUsersApi1(), getUsersApi2(), getUsersApi3()])
.then(result => console.log(result))
.catch(err => console.log(err));
 
// Promise.all([getUsersApi1(), getUsersApi2()])
// .then((result) => {
//     console.log("Promise all:", result);
// }).catch((error) => {
//     console.log("Error:",  error);
// });

// Promise.race
console.log("---------------------------");
console.log("THIS IS PROMISE.RACE RESULT");
console.log("---------------------------");
Promise.race([getUsersApi1(), getUsersApi2(), getUsersApi3()])
.then(result => console.log(result))
.catch(err => console.log(err));
 



 


