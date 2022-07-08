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
    let checkRegexNomPrenom = new RegExp(/^[a-zA-Z.+-]*(?:[a-zA-Z][a-zA-Z.+-]*){2,}$/);
    let checkRegexMail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let checkRegexBirthdate = new RegExp(/^\d{4}[-]\d{1,2}[-]\d{1,2}$/);

    // On vérifie si il y a des erreur si oui return les erreurs
    if (first.value === "" || first.value.length < 2 || checkRegexNomPrenom.test(first.value) === false) {
        Affichage(first);
        first.style.border = '2px red solid'
        classAffichage.classList.add("error");
        classAffichage.innerHTML = 'Veuillez entrer 2 caractères ou plus';
        return false;
    }
    // On vérifie si il y a des erreur si oui return les erreurs
    if (last.value === "" || last.value.length <= 2 || checkRegexNomPrenom.test(first.value) === false) {
        Affichage(last);
        last.style.border = '2px red solid'
        classAffichage.classList.add("error");
        classAffichage.innerHTML = 'Veuillez entrer 2 caractères ou plus';
        return false;
    }
    // On vérifie si il y a des erreur si oui return les erreurs
    if (email.value === "" || checkRegexMail.test(email.value) === false) {
        Affichage(email);
        email.style.border = '2px red solid'
        classAffichage.classList.add("error");
        classAffichage.innerHTML = 'Veuillez entrer un email valide !';
        return false;
    }
    // On vérifie si il y a des erreur si oui return les erreurs
    if (birthdate.value === "" || checkRegexBirthdate.test(birthdate.value) === false) {
        Affichage(birthdate);
        birthdate.style.border = '2px red solid'
        classAffichage.classList.add("error");
        classAffichage.innerHTML = 'Veuillez entrer une date de naissance valide !';
        return false;
    }
    // On vérifie si il y a des erreur si oui return les erreurs
    if (concours.value === "" || concours.value < 0) {
        Affichage(concours);
        birthdate.style.border = '2px red solid'
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
    // Si tout est ok alors on envoie le formulaire
    return true;
}

// Function pour récupperer la balise d'affichage d'erreur.
function Affichage(item) {
    let parent = item.parentNode;
    let child = parent.children;
    classAffichage = child[child.length - 1];
    return classAffichage;
}

// Function qui verifie au moment de la saisie les données
function deleteMessage(para) {
    // On met en place notre variable de verification en regex et on verifie l'id puis on lui assigne une valeur regex
    let checkRegex = "";
    if (para.id === 'email') {
        const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        checkRegex = new RegExp(regexMail);
    } else if (para.id === 'first' || para.id === 'last') {
        const regexNomPrenom = /^[a-zA-Z.+-]*(?:[a-zA-Z][a-zA-Z.+-]*){2,}$/;
        checkRegex = new RegExp(regexNomPrenom);
    } else if (para.id === 'birthdate') {
        const regexBirthdate = /^\d{4}[-]\d{1,2}[-]\d{1,2}$/;
        checkRegex = new RegExp(regexBirthdate);
    }
    // On récuppére notre balise pour afficher les erreur
    let parent = para.parentNode;
    let child = parent.children;
    child = child[child.length - 1];
    para.addEventListener('blur', () => {
        // On récuppere la valeur de notre input
        if (para.value != "") {
            // On verifie l'identité de notre input
            if (para.id === 'first' || para.id === 'last' || para.id === 'email') {
                // On verifie la longeur de notre valeur
                if (para.value.length >= 2 && para.value.length <= 30) {
                    // On verifie avec notre variable regex si oui alors on valide
                    if (checkRegex.test(para.value)) {
                        child.innerHTML = '';
                        para.style.border = '2px green solid'
                    } else {
                        //  On retourne une erreur si notre variable de match pas
                        if (para.id === 'email') {
                            child.classList.add("error");
                            para.style.border = '2px red solid';
                            child.innerHTML = 'Vérifier votre email';
                        } else if (para.id === 'first' || para.id === 'last') {
                            child.classList.add("error");
                            para.style.border = '2px red solid';
                            child.innerHTML = 'Vérifier que aucun chiffre ne sois présent!';
                        }
                    }
                } else {
                    // On retourne une erreur si notre variable de match pas
                    child.classList.add("error");
                    para.style.border = '2px red solid';
                    child.innerHTML = 'Il faut un minimum de 2 caractéres !';
                }

                // On verifie avec notre variable regex si oui alors on valide
            } else if (para.id === 'quantity') {
                if (para.value >= 0 && para.value <= 99) {
                    child.innerHTML = '';
                    para.style.border = '2px green solid'
                } else {
                    // On retourne une erreur si notre variable de match pas
                    child.classList.add("error");
                    para.style.border = '2px red solid';
                    child.innerHTML = 'Entrer une valeur superieur ou égales à 0 et inferieur ou égales à 99';
                }
                // On verifie avec notre variable regex si oui alors on valide
            } else if (para.id === 'birthdate') {
                if (checkRegex.test(para.value)) {
                    // On récupéres ma date compléte d'aujourd'hui
                    dateNow = new Date();
                    // On récupéres l'année grâce à une fonction de js
                    dateNow = dateNow.getFullYear();
                    // Et surtout on split notre date de naissance pour récuppérer notre année entrer dans l'input 
                    verifYears = birthdate.value.split('-')[0];
                    if (verifYears >= 1930 && verifYears <= dateNow-5) {
                        child.innerHTML = '';
         
                        para.style.border = '2px green solid'
                    }
                    else {
                        // On retourne une erreur si notre variable de match pas
                        child.classList.add("error");
                        para.style.border = '2px red solid';
                        child.innerHTML = 'Date non valide ou trop jeune pour s\'inscrire';
                    }
                } else {
                    // On retourne une erreur si notre variable de match pas
                    child.classList.add("error");
                    para.style.border = '2px red solid';
                    child.innerHTML = 'Votre date n\'as pas le bon format (exemple : 15/05/1998)';
                }
            }
        } else {
            // On retourne une erreur si notre champ et vide
            child.classList.add("error");
            para.style.border = '2px red solid';
            child.innerHTML = 'Le champ ne doit pas être vide';

        }
    })
}

// Et pour terminer on initialise notre fonction avec diffrent paramettre
deleteMessage(first);
deleteMessage(last);
deleteMessage(email);
deleteMessage(birthdate);
deleteMessage(concours);