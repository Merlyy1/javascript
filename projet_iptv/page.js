let acceder = document.getElementById('myForm'); //acceder est une référence à l'élément du DOM qui a l'id myFORM

acceder.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    let prenom = acceder.elements['prenom'].value; //récupère les données du formulaire
    let name = acceder.elements['name'].value;  //récupère les données du formulaire
    let mdp = acceder.elements['mdp'].value; //récupère les données du formulaire
    let another_mdp = acceder.elements['another_mdp'].value; //récupère les données du formulaire
    let abonnement = acceder.elements['abonnement'].value; //récupère les données du formulaire

    
        if (prenom === '') {
            alert('Le prénom ne peut pas être vide');
            return;
            }
        if (name === '') {
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
    if (result) 
    {
        alert('Ok !');
        console.log('Prenom: ' + prenom + ', Nom: ' + name + ', Mdp: ' + mdp + ', Abonnement choisi: ' + abonnement);
    }
    else
    {
        alert("Vérifiez vos informations !")
    }
            
     });