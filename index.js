
/* 
    let willRain = true

    if (willRain) {
        console.log("take umbrealla");
    } else {
        console.log("no need to take umbrealla.");
    }
 */

/* nested  - if - else */
let willRain = false
let hasProbability = false
let isVerySunny = false

if (willRain) {
    console.log("take umbrealla");
} else {
    if (hasProbability) {
        console.log("your wish");
    } else {
        console.log("no-need");
    }
}

if (willRain) {
    console.log("take umbrealla");
} else if (hasProbability) {
    console.log("your wish");
} else if (isVerySunny) {
    console.log("take umbrellla");
} else {
    console.log("no need.");
}

let person1 = {
    name: "Ram",
    age: 25,
    hasConsent: false,
    hasSubmittedProject: true,
    metAttendance: false
}

/* marriage : must be grtr or eq to 20 */

if (person1.age >= 20) {
    console.log("he can ");
} else {
    console.log("he cant ");
}

if (person1.hasSubmittedProject) {
    console.log("can take exam");
} else {
    console.log("not eligible");
}


/* falsy values in js */
let ourCondtion = false;
ourCondtion = 0
ourCondtion = undefined
ourCondtion = null
ourCondtion = NaN
ourCondtion = ''  // but ' ' is considered ture, casue a space is there.

// except these upper 6 values, javascript considers all other values as true


// ourCondtion ="somerandom"
// ourCondtion =12
// ourCondtion =[1,2,]
// ourCondtion =[]
// ourCondtion ={}
if (ourCondtion) {
    console.log(ourCondtion, "true condition");
} else {
    console.log(ourCondtion, "false condition");
}





