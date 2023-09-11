/* variables 
    keywords which can store some vaues...

    NOTE : donot create variables using reserved keywords  in js

    synatx :

    let <varaibleName> = <variableValue>
    eg: let color = "red"
        let brand = "Apple"
        
        var size:"md"

        const PI = 3.145

*/

/* Data types 
    text - String
    number - number
            - integer // whole number
            - float   // decimal
    true/false   - Boolean

    undefined // variable created but not initialized yet  // only in javascript
    null // explicitely defining vlaues as empty
*/

console.log("web")
var course = "Web Dev"
console.log("course", course)

let course_duration = 3 // naming convention : snake_case
courseDuration = 2.5 // camelCase
console.log(course_duration);
console.log(courseDuration);

isCompleted = false
console.log("course complted status:", isCompleted)


// let = 12;
// console.log(let);
// const = "constant"
// console.log("con",const);


var course = "python" // unknowing we replace above course varaible while creating new varialbe
let python_course_duration = 2.5


/* DECLARTION AND INITIALZIATION 
    - declartion - creation of variable
    - initilzation - value update

*/


let count  // declartion 
count = 100 // initialization
console.log("count:", count);


let brand = "Apple"; // both declartion and initializtion
console.log("brand -prev:", brand);
brand = "samsung" // re-initalization
brand = "LG" // re-initalization
console.log("brand -after:", brand);

let color = "red"
console.log("color -prev:", color)
color = "orange"
console.log("color -after:", color)


const PI = 3.145
// PI = 3.134532  // cannot re-initialzie constant variable
console.log("PI:", PI)

// const ROTATION; 
// ROTATION = "W-E"

const EARTH_ROTATION = "W-E"
console.log("ROTATION:", EARTH_ROTATION)



/* var vs let vs const
        var
            - declartion 
            - re-declartion again and gain  // this will case errors in application 
            - re-initlazation again and again 

        let
            - declare only only 
            - re-initlazation again and again 

        const 
            - declarce once and initialize once 
*/


console.log("couse duration", course, course_duration);



let productPrice
console.log("productPrice", productPrice);


let data = null
console.log("data", data);
