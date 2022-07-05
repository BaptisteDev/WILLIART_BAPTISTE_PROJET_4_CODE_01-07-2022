// On récupére les champs de notre formulaire ainsi que leur valeur

let first = document.querySelector('#first');
let last = document.querySelector('#last');
let email = document.querySelector('#email');
let validOrError = document.querySelectorAll('.valid-or-error');


// On récupére notre button submit 
let submit = document.querySelector('#btn-submit');


function verifName(para) {
    // On met en place nos variable de verification en regex
    const regexNomPrenom = /([A-Za-z])/;
    let checkRegex = new RegExp(regexNomPrenom);

    // On récuppére notre balise pour afficher les erreur
    let parent = para.parentNode;
    let child = parent.children;

    para.addEventListener('change', () => {
        // On récuppere la valeur de notre input
        if (para.value != "") {
            // On verifie la longeur de notre valeur
            if (para.value.length >= 2 && para.value.length <= 20) {
                // On verifie avec notre variable regex
                if (checkRegex.test(para.value)) {
                    child[4].classList.add("valid");
                    child[4].classList.remove("error");
                    child[4].innerHTML = 'Bravo, vos informations sont correct.';
                    return 'isValid';
                } else {
                    child[4].classList.add("error");
                    child[4].innerHTML = 'Vérifier que aucun chiffre nt e sois présent!';
                    return 'notValid';
                }
            } else {
                child[4].classList.add("error");
                child[4].innerHTML = 'Il faut un minimum de 2 caractéres !';
                return 'notValid';

            }
        } else {
            child[4].classList.add("error");
            child[4].innerHTML = 'Le champ ne doit pas être vide';
            return 'notValid';
        }
    })
}

function verifMail(para) {
    // On met en place nos variable de verification en regex
    const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let checkRegex = new RegExp(regexMail);

    // On récuppére notre balise pour afficher les erreur
    let parent = para.parentNode;
    let child = parent.children;

    para.addEventListener('change', () => {
        // On récuppere la valeur de notre input
        if (para.value != "") {
            // On verifie avec notre variable regex
            if (checkRegex.test(para.value)) {
                child[4].classList.add("valid");
                child[4].classList.remove("error");
                child[4].innerHTML = 'Bravo, vos informations sont correct.';
                return 'isValid';
            } else {
                child[4].classList.add("error");
                child[4].innerHTML = 'Vérifier votre email';
                return 'notValid';
            }

        } else {
            child[4].classList.add("error");
            child[4].innerHTML = 'Le champ ne doit pas être vide';
            return 'notValid';
        }
    })
}

// Init de mes fonctions 
verifName(first);
verifName(last);
verifMail(email);