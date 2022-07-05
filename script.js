document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.querySelector(".menu ").classList.toggle("mostrar_menu");
}

let botonRegister = document.getElementById('register');
let botonLogin = document.getElementById('login');
//let changeText = document.getElementById('welcome');

function Register (){
    let createName = prompt('Crea tu usuario: ↓');
    let createPassword = prompt('Crea tu contraseña: ↓');
    if(createName.trim() == '' | createPassword.trim() == ''){
        alert("No te has registrado correctamente.");
    } else if(createName.length != '' && createPassword.length != ''){
        localStorage.setItem('Name', createName);
        localStorage.setItem('Password', createPassword);
        alert('Te has registrado correctamente.');
    }
}

function Login (){
    let currentUser = localStorage.getItem('Name');
    let currentPassword = localStorage.getItem('Password');

    let verifyUserName = prompt('Escribe tu usuario: ↓');
    let verifyPassword = prompt('Escribe tu contraseña: ↓');

    if(currentUser === verifyUserName && currentPassword === verifyPassword){
        alert('Iniciaste sesión correctamente.');
        changeText.textContent = 'Bienvenido, ' + currentUser;
        hideButtons();
    } else {
        alert('Datos incorrectos. Intenta nuevamente.');
    }
}

function hideButtons(){
    document.querySelector('#register').style.display = "none";
    document.querySelector('#login').style.display = "none";
}

botonRegister.onclick = function(){
    Register();
}

botonLogin.onclick = function (){
    Login();
}