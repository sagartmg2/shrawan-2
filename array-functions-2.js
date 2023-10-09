let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
    },

]

/* username  of leanne grahm is bret */
/* username  of Ervin grahm is Antonette */


function printUserName(userObj) {
    console.log(`${userObj.name}'s username is ${userObj.username}`);
}

// for (let index = 0; index < users.length; index++) {
//     let currentUser = users[index]
//     printUserName(currentUser)
// }


/* callback:   simply a function , which is passed as arguement to another function */
users.forEach(printUserName)

console.log("_____");


users.forEach((element) => {
    console.log(`${element.name},${element.username}`);
})



let numbers = [100, 5, 4, 3]

const printSelf = (element, index) => {
    console.log({ element }, { index });
}

// printSelf(1)
// printSelf(2)


// printSelf(numbers[0])
// printSelf(numbers[1])
// printSelf(numbers[2])
// printSelf(numbers[3])

// numbers.forEach(printSelf)


numbers.forEach((element, index) => {

    if (index < 2) {
        console.log({ element }, { index })
    }else{
        console.log("above or equal to  index 2");
    }

})





