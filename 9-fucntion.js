/* 
     1 + 2 = 3
     1 + 3 = 4
     3 + 3 = 6
*/
/* 
    the sum of 1 and 2 is 3
    the sum of 1 and 3 is 4
    the sum of 3 and 3 is 6
*/

/* console.log("2 + 2 = 2");
console.log("1 + 2 = 3");
console.log("3 + 3 = 6"); */

/* function 

    syntax 

    function <functionName>(){

    }

*/

console.log(1,2);

function calculateSum(input1, input2) { // input1 and input2 are called parameters
    console.log({ input1 }, { input2 });
    console.log(input1 + " + " + input2 + " = " + (input1 + input2));
    console.log("\n");
}

/* executing / calling  a function */

calculateSum(100, 200)  // 100 and 200 here are called arugements
calculateSum(10, 20)
calculateSum(1, 2)



let dbPassword = 12345678

let user2 = {
    email: "two@two.com",
    password: 12345678
}

let user3 = {
    email: "three@gmail.com",
    password: 1234234234
}

let user4 = {
    email: "four@gmail.com",
    password: 12345678
}

// two@two.com can login
// tgree@gmail.com cant login
// four@gmail.com can login

// if( user2.password === dbPassword ){
//     console.log(user2.email," can login");
// }else{
//     console.log(user2.email," cant login");
// }
// if( user3.password === dbPassword ){
//     console.log("user2 can login");
// }else{
//     console.log("user2 cant login");
// }
// if( user3.password === dbPassword ){
//     console.log("user2 can login");
// }else{
//     console.log("user2 cant login");
// }


function login(inputUser){
    if( inputUser.password === dbPassword ){
        console.log(inputUser.email," can login");
    }else{
        console.log(inputUser.email," cant login");
    }
}

login(user2)
login(user3)
login(user4)



/* Ternary operator   */