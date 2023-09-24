

let numbers = [5, 6, 7, 8, 9, 10]

let doubledNumbers = []
let evenNumbers = [] // [6,8,10]
let oddNumbers = [] // [5,7,9]

// doubledNumbers.push(2)  / [2]

// for( starting-point ; condition ; mutator)

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);

for (let index = 0; index <= 4; index++) {
    let ourNumber = numbers[index]
    console.log(ourNumber, { index })
    doubledNumbers.push(ourNumber * 2)
}


/* loop through numbers array */
console.log({ doubledNumbers })  // [2,4,6,8,10]