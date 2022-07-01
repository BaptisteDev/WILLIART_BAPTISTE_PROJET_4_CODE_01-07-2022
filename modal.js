function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Variable pour permettre la fermeture de la modal
const modalBtnClose = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Event sur la modal pour la fermeture
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// Fonction qui permet la fermeture de la modal
function closeModal() {
    modalbg.style.display = "none";
}