let db_users = [
    { name: 'Yogesh', email: 'yogesh@gmail.com', password: 'yogesh38' },
    { name: 'Sushil', email: 'sushil@gmail.com', password: 'sushil36' },
    { name: 'Urmila', email: 'urmila@gmail.com', password: 'urmila37' },
]


function loginUser(inputEmail, inputPassword) {
    // check if user exists or now...

    let matched = false;

     
    for (let index = 0; index < db_users.length; index++) {
        console.log({index})
        let user = db_users[index]
        if (user.email === inputEmail && user.password === inputPassword) {
            matched = true;
            break;  // breaks the loop .
        }

    }

    if(matched){
        console.log("login ..success");
    }else{
        console.log("invalida...");
        
    }

}


loginUser("yogesh@gmail.com", "yogesh38") // login successful


