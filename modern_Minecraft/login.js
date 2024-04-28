
document.querySelector(".inputPass").addEventListener('input', validate);
document.querySelector(".login-btn").disabled = true;
var RGEX = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})/;
function validate() {
    var inputPass = document.getElementById("inputPass").value;

    if (!inputPass.match(RGEX)) {
        document.querySelector(".login-btn").disabled = true;

    } else {
        document.querySelector(".login-btn").disabled = false;
        document.querySelector(".inputPass").style.border = null;
    }
}
document.querySelector(".login-btn").addEventListener('click', login);


function login() {
    var user = document.getElementById("inputUser").value;
    var pass = document.getElementById("inputPass").value;
    if (pass == localStorage.getItem(user)) {
        alert("Logged In");
        window.location.href = "homePage.html";
        // return false;
    } else {
        alert("wrong user/pass");
        return false;
    }
}



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




let timer, timeoutVal = 500; // time it takes to wait for user to stop typing in ms
const kick = document.getElementById('check');
const typer = document.querySelector(".register-passRepeat");
const registerbtn = document.querySelector(".register-submit-btn");
registerbtn.disabled = true;


typer.addEventListener('keypress', handleKeyPress);
typer.addEventListener('keyup', handleKeyUp);
function handleKeyPress(e) {
    window.clearTimeout(timer);
    kick.style.color = 'unset';
}

function handleKeyUp(e) {
    window.clearTimeout(timer); // prevent errant multiple timeouts from being generated
    timer = window.setTimeout(() => {
        let passrepeat1 = document.querySelector(".register-pass").value;
        let passrepeat2 = document.querySelector(".register-passRepeat").value;
        if (passrepeat1 == passrepeat2 && passrepeat2.match(RGEX)) {
            kick.style.color = 'green';
            registerbtn.disabled = false;
        } else {
            kick.style.color = '#EA6549';
            registerbtn.disabled = true;
        }
    }, timeoutVal);
}

registerbtn.onclick = function () {
    alert("Register");
    let regusername = document.querySelector(".reg-username").value;
    let regPass = document.querySelector(".register-pass").value;
    localStorage.setItem(regusername,regPass);
    sidebar1.classList.toggle('active');
    sidebar2.classList.toggle('active');
}