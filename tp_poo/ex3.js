class Animal{
    constructor(nom){
        this.nom = nom;
    }
    
    parler() { 
            console.log("cet animal fait du bruit");
    }
    
}

class Chien extends Animal{
    constructor(nom){
        super(nom);
    }
    parler(){
         console.log(`le chien ${this.nom} aboie`);
    }
    
}

class Chat extends Animal{
    constructor(nom){
        super(nom);
    }
    parler(){
        console.log(`le chat ${this.nom} miaule`)
    }
}

const rex = new Chien("Rex");
rex.parler();

const minou = new Chat("Minou");
minou.parler();