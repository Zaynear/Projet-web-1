
// fonction qui permet de trouver un élément réadapter grâce à cette exemple Le code:(https://www.developpez.net/forums/anocode.php?id=2837f9cab9d25f16e55a555a374313a2) le forum(https://www.developpez.net/forums/d1550962/javascript/general-javascript/barre-recherche/)
function FindNext () 
{
    var str = document.getElementById ("findField").value;
    if (str == "") {
    alert ("Please enter some text to search!");
    return;
    }
    var supported = false;
    var found = false;
    if (window.find) {        // recherche dans la page
        supported = true;
            // si du contenu est séléctionnné, Le début de la recherche séléctionné sera la position finale de la sélection
            found = window.find(str);
    }
    else {
        if (document.selection && document.selection.createRange) {
            var textRange = document.selection.createRange ();
            if (textRange.findText) {   
                supported = true;
                    // si du contenu est sélectionné, la position de départ de la recherche sera la position après la position de départ de la sélection
                if (textRange.text.length > 0) {
                    textRange.collapse (true);
                    textRange.move ("character", 1);
                }

                found = textRange.findText (str);
                if (found) {
                    textRange.select ();
                }
            }
        }
    }
    if (supported) {
        if (!found) {
            alert ("The following text was not found:\n" + str);
            window.open("https://www.google.com/search?q=" + str);
        }
        if (found) {
            alert("le mot "+ str +" à été trouvé.");
        }
    }
    else {
        alert ("Your browser does not support this example!");
    }
}


// Pour la validation du formulaire
function validateEmail(Email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(Email);
}

validateEmail();

function Verification() {
// Récupérer lavaleur des champs nom et email
    var Nom = document.getElementById('idNom').value;
    var Email = document.getElementById('idEmail').value;
    var Prenom = document.getElementById('idPrenom').value;

    // Contrôle sur le nom
    if(Nom=='')
    {
        alert('Vous devez compléter votre nom !');
        document.getElementById('idNom').style.backgroundColor="red";
        document.getElementById('idNom').style.color="#FFF";

        // Permet de bloquer l'envoi du formulaire
        return false;
    }
    else
    {
        document.getElementById('idNom').style.backgroundColor="#9C6";
    }

    // Contrôle sur le Prénom
    if(Prenom=='')
    {
        alert('Vous devez compléter votre Prénom !');
        document.getElementById('idPrenom').style.backgroundColor="red";
        document.getElementById('idPrenom').style.color="#FFF";

        // Permet de bloquer l'envoi du formulaire
        return false;
    }
    else
    {
        document.getElementById('idPrenom').style.backgroundColor="#9C6";
    }

    // Contrôle sur l'email
    if(Email=='') 
    {
        alert('Vous devez compléter votre adresse email');
        document.getElementById('idEmail').style.backgroundColor="red";
        document.getElementById('idEmail').style.color="#FFF";
        return false;
    }

    else
    {
        document.getElementById('idEmail').style.backgroundColor="#9C6";
    }
}
