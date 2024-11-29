// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!";


// newbtn.style.backgroundColor = "red";
// newbtn.style.color = "white";

// document.querySelector("body").prepend(newbtn);

// let para = document.querySelector("p");

// let btn = document.querySelector("btn");
// btn.addEventListener("click",(evt) => {
//     console.log("button was clicked");
//     console.log(evt);
//     console.log(evt.type);
// })

// let modebtn = document.querySelector("#mode");

// let currmode = "light";
// modebtn.addEventListener("click" , () => {
//     if(currmode === "light"){
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currmode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currmode);
// });


let DATA = "secret information";

class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data =",DATA);
    }
}

class Admin extends User {
    constructor(name,email){
        super(name, email);
     }
    editData(){
        DATA = "some new value";
    }
}

let student1 = new User("saswat","sas@email.com");
let student2 = new User("subham","subham@email.com");

let admin1 = new Admin("samarsh","aditya@email.com");