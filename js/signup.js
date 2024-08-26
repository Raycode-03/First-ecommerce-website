let name;
let password;
let form;
name=document.querySelector(".name").value;
password=document.querySelector(".password").value;
form=document.querySelector("#form").addEventListener("submit",load);

function load(e){
    e.preventDefault()
    let pw = document.querySelectorAll(".password").value;
    // if (name.value==="" && password.value===""){
    //     alert("add name and password");
    // }
    
    // else if (pw <= 0){
    //     alert('password cant be empty');
    // }  
    if (pw<8) {
        alert("password value cannot be lower than 8");
    }
    else if(pw>15){
        alert("password value can not be greater than 15");
    }
    else{
        window.open("html/index.html","target");
    }
}