etat1 = true;
function changer5()
{
    if (etat1){
     document.getElementById('password').setAttribute("type","text");  //change l'attribut du type en text  
     document.getElementById('eye3').src="no_eye.png"; //change l'url d'une image
     etat1 = false; //Etat false pour le cas du else
   
    }
    else
    {
     document.getElementById('password').setAttribute("type","password");  //change l'attribut du type en password  
     document.getElementById('eye3').src="eye_open.png"; //change l'url d'une image
    
     etat1 = true; //remmettre Etat =true pour pouvoir faire fonctionner le if etat=true
    }   
}


document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();// Empêche la soumission par défaut du formulaire

    let logs = document.getElementById('username').value; //recupère la valeur de username
    let mdp = document.getElementById('password').value; //recupère la valeur de password

    if (logs === 'root' && mdp === 'root') {
        sessionStorage.setItem('authenticated', 'true');//stocke dans la mémoire du navigateur une clé authenticated
        //valeur true signifiant que l'utilisateur est connecté
        window.location.href = 'page.html'; // Redirige vers la page interface abonnée
    } else {
        alert('Identifiants incorrects');
    }
});
