
document.querySelector(".inputPass").addEventListener('input', validate);
document.querySelector(".btn").disabled = true;
function validate(){
    var inputPass = document.getElementById("inputPass").value;
    var RGEX = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})/;
    console.log(inputPass);
    if(!inputPass.match(RGEX)) {
        document.querySelector(".btn").disabled = true;
        // document.querySelector(".inputPass").style.border= "1px solid rgb(244, 87, 87)";
        
    } else {
        document.querySelector(".btn").disabled = false;
        document.querySelector(".inputPass").style.border= null;
    }
}

function login() {
    var user = document.getElementById("inputUser").value;
    var pass = document.getElementById("inputPass").value;
    if (user == "lab18" && pass == "Ma20406632") {
        alert("Logged In");
        window.location.href = "homePage.html";
        // return false;
    } else {
        alert("wrong user/pass");
        document.querySelector(".btn").innerHTML = "Not match";
        document.querySelector(".inputPass").style.border= "1px solid rgb(244, 87, 87)";
        return false;
    }
}

// document.querySelector(".btn").innerHTML = "not match";


// document.querySelector(".login-btn").addEventListener('click', pageSwap);
// document.querySelector("#close-btn").addEventListener('click', pageSwap);

// let loginPage = document.querySelector(".wrapper-login");
// let registerPage = document.querySelector(".wrapper-register");

// function pageSwap() {
//     loginPage.classList.toggle("active");
//     registerPage.classList.toggle("active");
//     alert("ok")
// };

let btn1 = document.querySelector("#close-btn");
let btn2 = document.querySelector("#loginSwap-btn");
let sidebar1 = document.querySelector(".wrapper-login");
let sidebar2 = document.querySelector(".wrapper-register");

console.log(btn2);
btn1.onclick = function () {
    sidebar1.classList.toggle('active');
    sidebar2.classList.toggle('active');
};
btn2.onclick = function () {
    sidebar1.classList.toggle('active');
    sidebar2.classList.toggle('active');
};