


let nb_etudiant = parseInt(prompt("Combien d'étudiant sont dans la classe?"));
let eval = parseInt(prompt("Combien d'évaluations seront saisies pour chaque étudiant?"));


let saisie_note=0;
let stock_moyEleve = [];
let stock_moyClasse = [];
let appreciation="";


function moyenne() {
    let sum = stock_moyEleve.reduce(function(acc, curr) {
        return acc + curr; // calcul somme
    }, 0);
    
    let moy_note = sum / eval; // divise par le nb d'eval
    console.log("La moyenne de l'élève est de : " + moy_note);
    return moy_note;
}

function notation(appreciation)
{
    if(moyenne()>=18)
    {
        return appreciation = alert("Notation : Excellent");
    }
    else if(moyenne()>=15 && moyenne()<18)
    {
        return appreciation = alert("Notation : Très bien");
    }
    else if(moyenne()>=12 && moyenne()< 15)
    {
        return appreciation = alert("Notation : Bien");
    }
    else
    {
        return appreciation = alert("Notation : Peut mieux faire");
    }
}

for(let i=1 ; i<=nb_etudiant ; i++)
{
    stock_moyEleve = []; 
    for(let j=1 ; j<=eval ; j++)
    {
        saisie_note=parseInt(prompt("Entrez la note pour l'evalutation "+[j] +" de l'étudiant " +[i]));
        console.log("étudiant n° : "+[i]+", note d'éval : "+saisie_note);

        stock_moyEleve.push(saisie_note);   //insérer dans le tableau stock
        
        alert("La note de l'élève n° " +[i]+ " est "+ saisie_note);
    }
    
    let moyenneEleve = moyenne(); 
    alert("La moyenne de l'élève n° " +[i]+ " est " + moyenneEleve);
    notation(moyenneEleve);
   //console.log("La moyenne générale de la classe est de : " + moyenneEleve/nb_etudiant);
}


