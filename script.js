let btn = document.querySelector("#submit");
let firstError = document.querySelector(".firstError");
let secondError = document.querySelector(".secondError");
let firstInput = document.querySelector("#name");
let secondInput = document.querySelector("#email");
let pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(firstInput.value == ""){
        firstInput.style.border = "1px solid black"
        firstError.innerHTML = "Please fill in your name"
    }
    else if(firstInput.value !== "" && secondInput.value == ""){
        firstError.style.display = "none";
        secondError.style.display = "block"
        secondError.innerHTML = "Please fill in your email"
    }

    else if(!(secondInput.value.match(pattern))){
            secondInput.style.border = "1px solid black"
            secondError.innerHTML = "Please fill in the right email"       
    }
    else{
        secondError.style.display = "none"
    }
});