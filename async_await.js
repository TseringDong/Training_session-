const getUserDetail = [{
    id :1, 
    name: "John"
},
{
 id : 2, 
 name : "Sara"   
}]

const getUserById = async (id) => {
//     const newUserArray = users.filter((user, index) => {
//         return user.id ===id;
//  });
// }
// console.log(newUserArray); 

// find user by loop 
// let foundUser = null;
//     for (const user of users) {
//         console.log(user);
//             if (user.id ===id){
//                foundUser = user; 
//             }
//     }

return new Promise((resolve, reject) => {
    
});

const result = user.find((user, index) => {
    return user.id === id;
 })
    return result; 

const updateName = (id, name)  => {
    const user = getUserById(id);
    console.log("before change:", user);
    if (user) {
        user.name = name;
        console.log("after change:", user);
    }
};

updateName(1, "Ram");


