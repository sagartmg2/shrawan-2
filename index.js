
let name = "hari kumar"
/* code below  */
name = "hari bahadur"

console.log("name", name);

let age = 20
age = 30

/* array  
        index  // always starts with 0
*/
let colors = ["red", "orge", "blue"]
/* code below */
console.log("colors", colors);
console.log("colors - 1st index - prev", colors[1]);
colors[1] = "ORANGE"
console.log("colors - 1st index - after ", colors[1]);




/* TODO: make an array of your family members */

// let familyMembers = [
//     "dad",
//     "mom",
//     "brother"
// ]

let familyMembers = [
    {
        // index: 0,
        name: "mr dad",
        age: 50,
        phone: 98510
    },
    {
        // index: 1,
        name: "mrs mom",
        age: 45,
        phone: 98666,
    },
    {
        // index: 2,
        name: " brother",
        age: 999999,  // TODO: fix this to 20
        phone: 97666,
    },
]

console.log("familyMembers", familyMembers);

 let brother = familyMembers[2]; // {name:brohter,age:9999,.....}
console.log("borther -prev", brother);
brother.age = 20;
console.log("borther -after", brother); 


/* or we can do...  */
familyMembers[2].age = 20
console.log("brohter",familyMembers[2]);


/* object 
    syntax 

        let objName = {
            key : value,
            key : value,
            key : value,
        }
*/

// let myMobile = "samsung"

let myMobile = {
    brand: "samsung",
    model: "j7",
    price: 200000,
    mfd: 2020
}

console.log("myMobile", myMobile);
console.log("myMobile -price -before", myMobile.price);
myMobile.price = 10000 // change objects property value
console.log("myMobile -price - after ", myMobile.price);
console.log("myMobile", myMobile);

