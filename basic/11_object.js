// singleton

// object literal

const mySym=Symbol("key1")

const JsUer={
    name:"Ayush",
    "last name":"Singh",
    [mySym]:"myKey1",
    age:22,
    location:"India",
    email:"ayush@example.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday","Wednesday"]
}

console.log(JsUer.email);
console.log(JsUer["email"]);
console.log(JsUer["last name"]);
console.log(JsUer[mySym]);


JsUer.email="ayush@newemail.com"
console.log(JsUer);

// Object.freeze(JsUer) // freeze the object, no changes allowed
JsUer.email="ayush@oldemail.com"
console.log(JsUer);


JsUer.greeting=function(){
    console.log("Hello, welcome to JavaScript");
}

JsUer.greeting2=function(){
    console.log(`Hello, welcome to JavaScript,${this.name}`);
}



console.log(JsUer.greeting());
console.log(JsUer.greeting2());
