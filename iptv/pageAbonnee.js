//gérer la soumisson du formulaire html

let acceder = document.getElementById('myForm'); //acceder est une référence à l'élément du DOM qui a l'id myFORM

//event lorsqu'on clique sur l'oeil, pour voir le mdp
etat = true;
function changer()
{
    if (etat){
     document.getElementById('mdp').setAttribute("type","text");  //change l'attribut du type en text  
     document.getElementById('eye').src="no_eye.png"; //change l'url d'une image
     etat = false; //Etat false pour le cas du else
   
    }
    else
    {
     document.getElementById('mdp').setAttribute("type","password");  //change l'attribut du type en password  
     document.getElementById('eye').src="eye_open.png"; //change l'url d'une image
    
     etat = true; //remmettre Etat =true pour pouvoir faire fonctionner le if etat=true
    }   
}

etat2 = true;
function changer2()
{
    if (etat2){
     document.getElementById('another_mdp').setAttribute("type","text");  //change l'attribut du type en text  
     document.getElementById('eye2').src="no_eye.png"; //change l'url d'une image
     etat2 = false; //Etat false pour le cas du else
   
    }
    else
    {
     document.getElementById('another_mdp').setAttribute("type","password");  //change l'attribut du type en password  
     document.getElementById('eye2').src="eye_open.png"; //change l'url d'une image
     
     etat2 = true; //remmettre Etat =true pour pouvoir faire fonctionner le if etat=true
    }   
}


document.addEventListener("DOMContentLoaded", async function () {//domcontentloaded > script attend que l'html soit chargé avant exécution
    const abonnementSelect = document.getElementById("abonnement");//récupère le menu pour choisir l'abonnemment
    const chainesSelect = document.getElementById("chaines");//récupère le menu ou s'affiche les chaines

    async function mettreAJourChaines() {
        try {
            const response = await axios.get("https://localhost:3000/recupCurrentStream");//requete get vers l'url contenant les flux, et stock dans response
            const flux = response.data; //response.data > contenant les données correspondants au flux actuellement streamé

            if (!flux || flux.length === 0) {//s'il n'y a aucun flux streamé
                console.error("Aucune chaîne disponible.");
                return;
            }

            const abonnement = abonnementSelect.value; //récupère la valeur de l'abonnement du menu
            chainesSelect.innerHTML = "";//vide la liste des chaine dans le menu avant maj
            
            let chainesAffichees = []; //definit un tableau qui contiendra les chaine a afficher
            if (abonnement === "Gratuit") {
                if (flux.length === 2) {
                    chainesAffichees = flux.slice(0, 1); // Prend seulement 1 chaîne si 2 sont diffusées
                } else {
                    chainesAffichees = flux.slice(0, 2); // Sinon, prend jusqu'à 2 chaînes
                } //les 2 premieres chaines du flux
            } else if (abonnement === "Premium") {
                chainesAffichees = flux; //tout les chaines du flux
            }

            chainesAffichees.forEach(function(chaine) { //parcours chaque element du tableau contenant les chaines
                let option = document.createElement("option");//crée une option pour le menu déroulant
                option.value = chaine.name; //la valeur de l'option sera le nom de la chaine
                option.textContent = chaine.name; //le nom de la chaine sera affiché dans le menu déroulant
                chainesSelect.appendChild(option); //ajoute au menu deroulant
            });
            
        } catch (error) {
            console.error("Erreur lors de la récupération des chaînes :", error);
        }
    }

    mettreAJourChaines();
    abonnementSelect.addEventListener("change", mettreAJourChaines);
});

acceder.addEventListener('submit', function(event) 
{
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    //let prenom = acceder.elements['prenom'].value; //récupère le prenom du formulaire
    //let names = acceder.elements['names'].value;  //récupère le nom du formulaire
    let identifiant = acceder.elements['identifiant'].value;  //récupère le nom du formulaire
    let mdp = acceder.elements['mdp'].value; //récupère le mdp du formulaire
    let another_mdp = acceder.elements['another_mdp'].value; //récupère l'autre mdp du formulaire
    let abonnement = acceder.elements['abonnement'].value; //récupère l'abonnement du formulaire

//validaton coté client
        if (identifiant === '') {
            alert("L'identifiant ne peut pas être vide");
            return;
            }
        if (mdp === '') {
            alert('Le mot de passe ne peut pas être vide');
            return;
            }
        if (another_mdp === '') {
            alert('Le mot de passe ne peut pas être vide');
            return;
            }
        if (another_mdp !== mdp)
        {
            alert('Les mots de passes ne sont pas identiques');
            return;
        }


    let result = confirm("Êtes-vous sûr des vos informations ?")
    if (!result) 
    {
        alert('Vérifie tes infos !');
        //console.log('Prenom: ' + prenom + ', Nom: ' + names + ', Mdp: ' + mdp + ', Abonnement choisi: ' + abonnement);
        return; //pour stopper le code
    }
    else
    {
        alert('OK !');
    }

//Crée un objet avec les données du formulaire

    let formData = new URLSearchParams(); //urlsearchparams > objet en js qui permet lire les données du form. et de créer un ensemble clé valeur représentant les donnée du form.
    //et ca les met dans le bon format "application/x-www-form-urlencoded" pour que le serveur puisse comprendre.

    formData.append('identifiant', identifiant); //ajoute avec append les paire clé valeur à l'objet formdata
    formData.append('mdp', mdp);
    formData.append('abonnement', abonnement);

//envoi les données du formulaire au serveur avec le post
//post pour envoyer des données au serveur distant
axios.post('https://localhost:3000/submit', formData) //post:envoie l'entité vers la ressource visée post à https://localhost:3000/submit
        .then(response => {//then methode de promises, definit l'action a faire lorsque la promesse a été résolue
            console.log('donnée bien envoyé au serveur.', response.data);
        })
        .catch((error) => {
            console.error('erreur, donnée non envoyé au serveur.', error);
        })
});      
