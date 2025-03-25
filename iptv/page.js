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

acceder.addEventListener('submit', function(event) 
{
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    let prenom = acceder.elements['prenom'].value; //récupère le prenom du formulaire
    let names = acceder.elements['names'].value;  //récupère le nom du formulaire
    let mdp = acceder.elements['mdp'].value; //récupère le mdp du formulaire
    let another_mdp = acceder.elements['another_mdp'].value; //récupère l'autre mdp du formulaire
    let abonnement = acceder.elements['abonnement'].value; //récupère l'abonnement du formulaire

//validaton coté client
        if (prenom === '') {
            alert('Le prénom ne peut pas être vide');
            return;
            }
        if (names === '') {
            alert('Le nom ne peut pas être vide');
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

    formData.append('prenom', prenom); //ajoute avec append les paire clé valeur à l'objet formdata
    formData.append('names', names);
    formData.append('mdp', mdp);
    formData.append('abonnement', abonnement);

//envoi les données du formulaire au serveur avec le post
//post pour envoyer des données au serveur distant
axios.post('http://localhost:3000/submit', formData) //post:envoie l'entité vers la ressource visée post à https://localhost:3000/submit
        .then(response => {//then methode de promises, definit l'action a faire lorsque la promesse a été résolue
            console.log('donnée bien envoyé au serveur.', response.data);
        })
        .catch((error) => {
            console.error('erreur, donnée non envoyé au serveur.', error);
        })
});      
