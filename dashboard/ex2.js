class Afficheur{
    constructor(id,nom,localite,message){
        this.id = id;
        this.nom = nom;
        this.localite = localite;
        this.message = message;
    }

    afficherInfos(){
        return `Afficheur ${this.nom} [${this.id}] - Localité: ${this.localite}, Message : ${this.message}`;
    }
}

const monAfficheur = new Afficheur(1, "Afficheur Test", "Station A", "Bienvenue !");
console.log(monAfficheur.afficherInfos());
// Résultat attendu :
// Afficheur Afficheur Test (1) - Localité: Station A, Message: "Bienvenue !"

class Dashboard{
    constructor(){
        this.afficheurs = new Map; //créer instance de la classe map
    }

    ajouterAfficheur(id,nom,localite,message){
        if(this.afficheurs.has(id)) { //si id = 1 donc si elle existe déjà
            console.log(`L'id ${id} existe déjà !`);
        }
        else{
            this.afficheurs.set(id,this.afficheurs);
            console.log(`l'afficheur ${nom} est correctement ajouté.`)
        }
    }

    supprimerAfficheur(id){
        if(this.afficheurs.delete(id)){
            console.log(`ID ${id} supprimé !`);
        }
        else{
            console.log(`ID ${id} inexistant !`)
        }
    }

    afficherTousLesAfficheurs(){
        // for (const [key, value] of map.entries()) {
        //     console.log(`${key}: ${value}`);
        //     }
        console.log(afficheurs.afficherInfos());
    }
}

const dashboard = new Dashboard();
dashboard.ajouterAfficheur(1, "Afficheur 1", "Station A", "Message 1");
//dashboard.ajouterAfficheur(1, "Afficheur 2", "Station B", "Message 2");
dashboard.supprimerAfficheur(2);
dashboard.afficherTousLesAfficheurs();
// Résultat attendu :
// Afficheur Afficheur 1 (1) - Localité: Station A, Message: "Message 1"
// Afficheur Afficheur 2 (2) - Localité: Station B, Message: "Message 2"