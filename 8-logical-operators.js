

let person = {
    name: "ram",
    hasSubmittedAssignment: false,
    fullAttendance: false,
    isBackStudent: true,
    age: 18
}

/* && takes priority that || */
if (person.hasSubmittedAssignment && person.fullAttendance || person.isBackStudent) {
    // if (false && false || true) {
    // if (false || true) {
    // if (true) {
    console.log("can take exam");
} else {
    console.log("cant take exam");
}


if (person.age >= 20) {
    console.log("can marry");
} else {
    console.log("cant marry");
}


/* logical operators 
            AND   &&
            OR   ||   pipe sign/symbol    before backspace     or right lef-shift
            NOT   !
*/


/* database user  
    email: "ram@ram.com",
    password: 12345678

*/

let dbEmail = "ram@ram.com";
let dbPassword = "12345678"

let user1 = {
    // email: "ram@ram1212.com",
    email: "ram@ram.com",
    // password: "password",
    password: "12345678"
}
// code below here

if (user1.email === dbEmail && user1.password === dbPassword) {
    console.log("logged in ");
} else {
    console.log("invalid credientatils..");
}




// let dbPassword = "12345678"

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

if (user2.password === dbPassword) {
    console.log(user2.email, " can login");
} else {
    console.log(user2.email, "cant login");
}

if (user3.password === dbPassword) {
    console.log(user3.email, " can login");
} else {
    console.log(user3.email, "cant login");
}

if (user4.password === dbPassword) {
    console.log("user4 can login");
} else {
    console.log("user4 cant login");
}


/* function 
    DRY - donot reepat yoursel

    syntax

    function <functionName>(){
            // do some repetitive task
    }
 */
// 1 + 2 = 3
// 1 + 3 = 4
// 2 + 3 = 5

// console.log("1 + 2 = ", 1 + 2);
// console.log("1 + 3 = ", 1 + 3);
// console.log("2 + 3 = ", 2 + 3);

function sum(input1,input2) {
    console.log({input1},{input2});
    console.log("1 + 2 = ", 1 + 2);
    // console.log("sum of 1 and  2 is ", 1 + 2);
    console.log("\n");
}

sum(1,2) // calling or executing a function 
sum(200,300)
