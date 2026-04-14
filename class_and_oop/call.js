function SetUsername(username){
    this.username=username
    console.log("called");
    
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email=email
    this.password=password
}

const user=new createUser("Ayush","ayush@email.com","12345")

console.log(user);
