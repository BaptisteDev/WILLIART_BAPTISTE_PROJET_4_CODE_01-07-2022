/* On récupére les champs de notre formulaire ainsi que leur valeur 

let first = document.querySelector('#first');
let last = document.querySelector('#last');
let email = document.querySelector('#email');
let concours = document.querySelector('#quantity');
let birthdate = document.querySelector('#birthdate');

// On récupére notre button submit 
let submit = document.querySelector('#btn-submit');

function verifForm(para) {
    // On met en place notre variable de verification en regex et on verifie l'id puis on lui assigne une valeur regex
    let checkRegex = "";
    if (para.id === 'email') {
        const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        checkRegex = new RegExp(regexMail);
    } else if (para.id === 'first' || para.id === 'last') {
        const regexNomPrenom = /([A-Za-z]+)/;
        checkRegex = new RegExp(regexNomPrenom);
    } else if (para.id === 'birthdate') {
        const regexBirthdate = /^\d{4}[-]\d{1,2}[-]\d{1,2}$/;
        checkRegex = new RegExp(regexBirthdate);
    }


    // On récuppére notre balise pour afficher les erreur
    let parent = para.parentNode;
    let child = parent.children;
    child = child[child.length - 1];
    para.addEventListener('change', () => {
        // On récuppere la valeur de notre input
        if (para.value != "") {
            // On verifie l'identité de notre input
            if (para.id === 'first' || para.id === 'last' || para.id === 'email') {
                // On verifie la longeur de notre valeur
                if (para.value.length >= 2 && para.value.length <= 30) {
                    // On verifie avec notre variable regex
                    if (checkRegex.test(para.value)) {
                        child.classList.add("valid");
                        child.classList.remove("error");
               
                        if (array !== -1) {
                            array.splice(array, 1);
                        }
                        child.innerHTML = 'Bravo, vos informations sont correct.';
                    } else {
                        if (para.id === 'email') {
                            child.classList.add("error");
                            child.classList.add("error");
                            child.innerHTML = 'Vérifier votre email';
                        } else if (para.id === 'first' || para.id === 'last') {
                            child.classList.add("error");
                            child.innerHTML = 'Vérifier que aucun chiffre ne sois présent!';
                        }
                    }
                } else {
                    // On retourne une erreur si notre variable de match pas
                    child.classList.add("error");
                    child.innerHTML = 'Il faut un minimum de 2 caractéres !';
                }

            } else if (para.id === 'quantity') {
                if (para.value >= 0 && para.value <= 1000) {
                    child.classList.add("valid");
                    child.classList.remove("error");
                    child.innerHTML = 'Bravo, vos informations sont correct.';
                    if (array !== -1) {
                        array.splice(array, 1);
                    }
                } else {
                    // On retourne une erreur si notre variable de match pas
                    child.classList.add("error");
                    parent.classList.add("not-ok");
                    child.innerHTML = 'Entrer une valeur superieur ou égales à 0 et inferieur ou égales à 1000';
                }
            } else if (para.id === 'birthdate') {
                if (checkRegex.test(para.value)) {
                    child.classList.add("valid");
                    child.classList.remove("error");
           
                    child.innerHTML = 'Bravo, vos informations sont correct.';
                    if (array !== -1) {
                        array.splice(array, 1);
                    }
                } else {
                    // On retourne une erreur si notre variable de match pas
                    child.classList.add("error");
                    child.innerHTML = 'Votre date n\'as pas le bon format (exemple : 15/05/1998)';
                }
            }
        } else {
            // On retourne une erreur si notre champ et vide
            child.classList.add("error");
            child.innerHTML = 'Le champ ne doit pas être vide';

        }
        return true;
    })


}

// Init de mes fonctions 
verifForm(first);
verifForm(last);
verifForm(email);
verifForm(concours);
verifForm(birthdate);

*/


// Nous allons verifier notre formulaire donc il nous faut des variables contenant nos id :

// Input avec l'id = first (prénom)
let first = document.querySelector('#first');

// Input avec l'id = first (nom)
let last = document.querySelector('#last');

// Input avec l'id = email (email)
let email = document.querySelector('#email');

// Input avec l'id = birthdate (birthdate)
let birthdate = document.querySelector('#birthdate');

// Input avec l'id = concours (concours)
let concours = document.querySelector('#quantity');

// Input avec l'id = checkbox1 (CGU)
let cgu = document.querySelector('#checkbox1');

// On récupére notre button submit 
let submit = document.querySelector('#btn-submit');

// Function pour verifier notre formulaire

function veriForm() {
    // Regex pour verifier notre input nom et prenom
    let checkRegexNomPrenom = new RegExp(/([A-Za-z]+)/);
    let checkRegexMail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let checkRegexBirthdate = new RegExp(/^\d{4}[-]\d{1,2}[-]\d{1,2}$/);

    // On vérifie si il y a des erreur si oui return les erreurs
    if (first.value === "" || first.value.length < 2 || checkRegexNomPrenom.test(first.value) === false) {
        Affichage(first);
        first.style.border = '1px red solid'
        classAffichage.classList.add("error");
        classAffichage.innerHTML = 'Veuillez entrer 2 caractères ou plus';
        return false;
    }
    // On vérifie si il y a des erreur si oui return les erreurs
    if (last.value === "" || last.value.length <= 2 || checkRegexNomPrenom.test(first.value) === false) {
        Affichage(last);
        last.style.border = '1px red solid'
        classAffichage.classList.add("error");
        classAffichage.innerHTML = 'Veuillez entrer 2 caractères ou plus';
        return false;
    }
    // On vérifie si il y a des erreur si oui return les erreurs
    if (email.value === "" || checkRegexMail.test(email.value) === false) {
        Affichage(email);
        email.style.border = '1px red solid'
        classAffichage.classList.add("error");
        classAffichage.innerHTML = 'Veuillez entrer un email valide !';
        return false;
    }
    // On vérifie si il y a des erreur si oui return les erreurs
    if (birthdate.value === "" || checkRegexBirthdate.test(birthdate.value) === false) {
        Affichage(birthdate);
        birthdate.style.border = '1px red solid'
        classAffichage.classList.add("error");
        classAffichage.innerHTML = 'Veuillez entrer une date de naissance valide !';
        return false;
    }
    // On vérifie si il y a des erreur si oui return les erreurs
    if (concours.value === "" || concours.value < 0) {
        Affichage(concours);
        birthdate.style.border = '1px red solid'
        classAffichage.classList.add("error");
        classAffichage.innerHTML = 'Veuillez entrer un nombres';
        return false;
    }
    // On vérifie si il y a des erreur si oui return les erreurs
    if (cgu.checked != true) {
        let classAffichage = document.querySelector('#cgu-error');
        classAffichage.classList.add("error");
        classAffichage.innerHTML = 'Veuillez accepter les CGU';
        return false;
    }
    return true;
}

function Affichage(item) {
    let parent = item.parentNode;
    let child = parent.children;
    classAffichage = child[child.length - 1];
    return classAffichage;
}