class Personne {

    constructor(nom,age){
        this.nom = nom;
        this.age = age;
    }

    sePresenter() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age}`);
    }

    
}
const alice = new Personne("Alice",30);
alice.sePresenter();