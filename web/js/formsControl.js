const inputName = document.getElementById("inputName"); 
const inputCompany = document.getElementById("inputCompany");
const inputTlf = document.getElementById("inputTlf");
const inputEmail = document.getElementById("inputEmail");
const datePicker = document.getElementById("datePicker");
const hourPicker = document.getElementById("hourPicker");
const inputSubject = document.getElementById("inputSubject");
const inputMessage = document.getElementById("inputMessage");
let errorMessage = document.getElementById("errorMessage");

// Reservas

function onloadReservas(){
    datePicker.setAttribute("min", new Date().toISOString().split("T")[0]);
    
    datePicker.addEventListener('change', (event) => {
        let now = new Date();
        let selectedDate = new Date(event.target.value);
        
        if(selectedDate.toISOString().slice(0,10) === now.toISOString().slice(0,10)) 
          hourPicker.min = now.toISOString().slice(11,16);
    });    
}

function onloadContact(){
    
}

function validateEmail(email){
    return String(email).match(/^[_A-Za-z0-9-]*@[_A-Za-z0-9-]*(\.[_A-Za-z]{2,3})$/);
}

function validateName(name){
    return String(name).match(/^[a-zA-Z]+$/);
}

function validateTlfNumber(num){
    return String(num).match(/^[0-9]+$/);
}

function isNotBlankInput(){
    if(inputName.value.replace(/\s/g, '') === "") {errorMessage.innerHTML = "El campo 'Nombre' no puede quedar vacío"; return false;}
    if(inputSubject.value.replace(/\s/g, '') === "") {errorMessage.innerHTML = "El campo 'Asunto' no puede quedar vacío"; return false;}
    if(inputMessage.value.replace(/\s/g, '') === "") {errorMessage.innerHTML = "El campo 'Mensaje' no puede quedar vacío"; return false;}
    return true;
}

function isCorrect(){
    if(!validateName(inputName.value)) {errorMessage.innerHTML = "El campo 'Nombre' sólo puede contener letras"; return false;}
    if(!validateEmail(inputEmail.value)) {errorMessage.innerHTML = "El campo 'Email' no cumple con el formato deseado"; return false;}
    if(!inputTlf.value.replace(/\s/g, '') === "") 
        if(!validateTlfNumber(inputTlf.value)) {errorMessage.innerHTML = "El campo 'Teléfono' sólo puede contener números"; return false;}
    return true;
}

function sendMessage(){
    if(!isNotBlankInput()) return false;
    if(!isCorrect()) return false;
    errorMessage.innerHTML = "";
    document.getElementById("contactForm").reset();
    window.doneModal.showModal();
}