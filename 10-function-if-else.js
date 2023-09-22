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

console.log(`${todos[0].title} is ${todos[0].status}`);
console.log(`${todos[1].title} is ${todos[1].status}`);
console.log(`${todos[2].title} is ${todos[2].status}`);
/* output : 
   html is true
   css is true
   js is true
*/

function statusCheck(value1,value2){
   if(value2 === true){
      console.log(`${value1} is completed`);

   }else{
      console.log(`${value1} is pending`)
   }
}
statusCheck(todos[0].title, todos[0].status);
statusCheck(todos[1].title,todos[1].status);
statusCheck(todos[2].title, todos[2].status);

  /*
   html is completed
   css is completed
   js is pending

*/