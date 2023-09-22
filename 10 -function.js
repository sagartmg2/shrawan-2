

console.log()


function work() {
    console.log("working")
}

let person = {
    "name": "ram",
    "work": work
}

// console.log(person.name);
// console.log(person.work);
// person.work()

let result = typeof (12)
// console.log({ result });

function double(value) {
    console.log(2 * value)
    return 2 * value
    return undefined
}


let doubledValue = double(4)
console.log({ doubledValue });




function double(value) {
    console.log(2 * value)
}

double(2)
double(4)


function sum(input1, input2) {
    console.log("insidesum", input1 + input2);
    return input1 + input2
    console.log("adfter return , codes doesnot run");
    console.log("adfter//");
    return undefined  // by default function retursn back undefined.  
}


console.log("sum is ", sum(1, 2))
console.log("type is ", typeof (12))

let summedValue = sum(100, 200)
console.log({ summedValue });


/* 
    1. make function  checkIsNumber
    2. access input parameter
    3. if else using typeof functin  as :53
    4. return back value
*/

function checkIsNumber(input) {

    if (typeof (input) === "number") {
        return true;
    } else {
        return false;
    }
}


/* TODOs:  OUTPUT */
console.log(checkIsNumber(100)); // true
console.log(checkIsNumber("hello")); // false


let todos = [
    { title: "html", status: true },
    { title: "css", status: true },
    { title: "js", status: false },
]

/* output : 
    html is true
    css is true
    js is true


    html is completed
    css is completed
    js is pending

*/