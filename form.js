// On récupére les champs de notre formulaire 

let first = document.querySelector('#first');
let last = document.querySelector('#last');

// On récupére notre button submit 
let submit = document.querySelector('#btn-submit');

// On met en place nos variable de verification en regex
const regexNomPrenom = /([A-Za-z])\w/;
let checkRegex = new RegExp(regexNomPrenom);

// On initialise le button submit en gris
submit.style.background = "grey";


// On commence les verifications de notre formulaire

submit.addEventListener('click', () => {
    // On récuppere la valeur de notre input
    if(first.value != ""){
        // On verifie avec notre variable regex
        console.log(checkRegex.test(first.value));
        if(checkRegex.test(first.value)){
            alert('ok');
            submit.style.background = "green";
        }
        else{
            alert('pas ok');
        }
    }
})