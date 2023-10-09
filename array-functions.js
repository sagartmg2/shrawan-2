/* array functions... */

let numbers = [100, 5, 4, 3]




function doSomething(text) {
    console.log("do somehing", text)
}


for (let index = 0; index < numbers.length; index++) {
    doSomething("now")
    console.log(numbers[index]);
}


/* forEach */
/* callback
        simply a function , which is passed as arguement to another function
*/

numbers.forEach(doSomething)


