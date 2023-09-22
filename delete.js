let todos = [
    { title: "html", status: true },
    { title: "css", status: true },
    { title: "js", status: false },
]

function statusCheck(todo_obj) {
    if (todo_obj.status) {
        console.log(`${todo_obj.title} is completed`);
    } else {
        console.log(`${todo_obj.title} is pending`)
    }
}



statusCheck(todos[0]);
statusCheck(todos[1]);
statusCheck(todos[2]);
// statusCheck(todos[1].title,todos[1].status);
// statusCheck(todos[2].title, todos[2].status);

/*
 html is completed
 css is completed
 js is pending

*/