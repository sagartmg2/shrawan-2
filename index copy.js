

let numbers = [5, 6, 7, 8, 9, 10]

let evenNumbers = [] // [6,8,10]
let oddNumbers = [] // [5,7,9]

// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);

for (let index = 0; index < numbers.length ;index++){
    console.log({index})
    let element = numbers[index]
    console.log("element",element)

    if(element % 2 == 0){
        evenNumbers.push(element)
    }else{
        oddNumbers.push(element)
    }
}

console.log({evenNumbers});
console.log({oddNumbers});

// for (let initalNumber = 0; initalNumber < 6;initalNumber++){
//     console.log({initalNumber})
// }