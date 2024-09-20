let choix_utilisateur;
let another_choix;
let ajout=[];


let retirer;

do 
{
    choix_utilisateur = parseInt(prompt("Choisissez parmi une de ces actions en entrant un nombre de 1 à 5 : "
        +"\n1. Ajouter un élément à la liste de courses "
        +"\n2. Retirer un élément de la liste de courses "
        +"\n3. Afficher les éléments de la liste de courses " 
        +"\n4. Vider la liste de courses "
        +"\n5. Quitter le programme (ou appuyez sur q) "));
    
switch (choix_utilisateur)
{
    case 1 :
        
        let ajout_element = prompt("Entrez le nom de l'élément à ajouter (ou appuyez sur q pour arrêter) : ");
        ajout.push(ajout_element);
        alert("Élement ajouté.");

        console.log("La liste après ajout : " +ajout);

        another_choix = parseInt(prompt("Vous voulez faire une autre action (1) ou non (2) ? "));
       
        break;
    case 2 :

        retirer = prompt("La liste de courses : " + ajout.join(", ")
        +"\nEntrez le nom de l'élément à retirer (ou appuyez sur q pour arrêter : ");
       
        let elementTrouve = false; //chatgpt
        for (element of ajout)
            {
                if (retirer == element)
                {
                    let index = ajout.indexOf(element)
                  
                    ajout.splice(index, 1);
                    alert("Élément bien retiré");
                    console.log("La liste après avoir retirer : " +ajout);
                    elementTrouve = true;
                } 
            }
            
            if (elementTrouve!==true) {         //chatgpt
                alert("Élément introuvable");   //chatgpt
            }   

            another_choix = parseInt(prompt("Vous voulez faire une autre action (1) ou non (2) ? ")); 
        break;
    case 3 :
            alert("La liste de course : " + ajout.join(", "));
            another_choix = parseInt(prompt("Vous voulez faire une autre action (1) ou non (2) ? "));
        break;
    case 4 :
            ajout=[];
            alert("Liste de courses vidée :");
            console.log("Liste après avoir vidée : " + ajout);
            another_choix = parseInt(prompt("Vous voulez faire une autre action (1) ou non (2) ? "));
        break;
    case 5 :
        alert("Au revoir ! ");
        another_choix =2;
        break;
    default:
        
    if (choix_utilisateur < 1 || choix_utilisateur > 5)
        {
            alert("Choix invalide. Veuillez réessayer.");
        }
        break;
}



}while(choix_utilisateur < 1 || choix_utilisateur >5 || another_choix == 1);
    