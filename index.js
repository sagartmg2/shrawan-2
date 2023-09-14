/* 
    make an array of persons
    and perform mutation on it.. .ie. change value of array elements.

    make use of array's index.

    synatx

    let arrName = [ element-1,element-2,element-3  ]


*/

let persons = ["ram", "hari", "sita", "ram"]
console.log("persons - before", persons);
console.log("1st index", persons[1]);
persons[1] = "shyam"
console.log("persons - after", persons);



/*
 Object // just like real life objects 

    key or property or attribute or field     of an object

    let <objName>  = {
        <key> : <value>,
        <key> : <value>,
        <key> : <value>
    }
    
*/

let projectorColor = "white"
let projectorPrice = 50000
let projectorBrand = "lg"

let projector2Color = "black"
let projector2Price = 40000
let projector2Brand = "benq"

let projector1 = {
    color: "white",
    price: 50000,
    brand: "lg"
}




let projector2 = {
    color: "black",
    price: 40000,
    brand: "benq",
    brand: "samsung",
    Brand: "apple"
}


console.log("projector1", projector1);
console.log("projector2", projector2);
console.log("projector2 - brand", projector2.brand);



let person1 = {
    firstName: "ram",
    lastName: "bdr",
    age: 12,
    address: "ktm",
    isMarried: false,
}

let person2 = {
    firstName: "ram",
    lastName: "kumar",
    age: 25,
    address: "bhaktapr",
    isMarried: true
}




/* 

name red
hex #FF0000
rgb 255,0,0



TODO: create an object of red, black & white colors containing above properties...


 */

let color1 = {
    name: "red",
    hex: "#FF0000",
    rgb: "rgb(255,0,0)"
}
let color2 = {
    name: "white",
    hex: "#FFFFF",
    rgb: "rgb(255,255,255)"
}
let color3 = {
    name: "black",
    hex: "#000000",
    rgb: "rgb(0,0,0)"
}

console.log("color1,", color1);
// console.log("color2,", color2);
// console.log("color3,", color3);

let colors = ["red", "white", "black"]
console.log("colors -prev", colors);

colors = [color1, color2, color3]
console.log("colors -after", colors);



let companyName = "apple"
let companyWebsite = "apple.com"
let companyCEO = "steve"
let companyStockPrice = 1000
let companyESTd = "1990"


let companyOne = ["apple", "apple.com", "steve", 1000, 1990]

let company2Name = "lg"
let company2Website = "lg.com"
let company2CEO = "lg"
let company2StockPrice = 1000
let company2ESTd = "1990"


let company1 = {
    name: "apple",
    website: "apple.com",
    ceo: "steve",
    price: 1000,
    estd: 1990
}

let company2 = {
    name: "lg",
    website: "lg.com",
    ceo: "lg",
    price: 1000,
    estd: 1990
}

company1 = {
    name: "apple",
    website: "apple.inc",
    ceo: "steve jobs",
    price:51000,
    estd: 1990
}


/* TODO: create an array of brands */
let brands = [
    company1,
    company2,
    {
        name:"samsung",
        estd:"1900",
        website:"Samsung.com"
    }
]


console.log("brands", brands);
