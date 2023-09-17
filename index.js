

let students = [
    {
        roll: 1,
        courses: ["Web", "Mobile"]
    },
    {
        roll: 2,
        courses: ["Machine Learning", "Mobile"]  // change mobile to Artificial intelligence via code
    }
]

console.log("before", students[1].courses);
console.log("before", students[1]);


students[1].courses[1] = "Artificial.. In.."

students[2] = {
    roll: 3,
    courses: ["Mobile"]
}


console.log("after", students);
console.log("after", students);


/* 
    TODO: 
     student with roll 2 have Mobile as one of his course 
    - change it io Artificial Intelligence 
    - and print it. 

    Output:

    [
        {
            roll: 1,
            courses: ["Web", "Mobile"]
        },
        {
            roll: 2,
            courses: ["Machine Learning", "Artificial Intelligence"]
        }
    ]
*/


/* Operators
    assignment operators
    arthematic operator
    conditional operator
    logical operator
*/


let number = 100
number = 100 + number
console.log({ number });


let count = 10

// count = 10  + 10
count += 10  // count = count + 10
console.log({ count });


let value = 0
value++  // 1
value++  // 2
console.log({ value });

/* arthematic operators
     + 
     - 
     * multiplication
     /   divistion    10 /3     3.3333
     %  modulous     10 % 3   gives out remainder   1  
*/

console.log( 10 / 3 );
console.log( 10 % 3 );

console.log(1<2);
console.log(2<=2);
console.log(2>2);
console.log(2>=2);

// EQUALITY OPERTOR == 
// strict EQUALITY OPERTOR === 

console.log("hello"  == "Hello");
