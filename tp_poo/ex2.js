class CompteBancaire {
    #solde;

    constructor(att_solde){
        console.log("passage par le constructeur")
        this.#solde = att_solde;
    }

    get solde() {
        console.log("passage par le getteur de solde")

        return this.#solde;
    }

    
    deposer(montant)
    {
        if(montant>0){
            this.#solde += montant;
            console.log(`montant depo = ${this.#solde}` )
        }
        else{
            console.log("le montant n'est pas positif !");
        }
    }

    retirer(montant)
    {
         
        
        if(this.#solde>montant)
        {
            this.#solde = this.#solde - montant;

        }
        else{
            console.log("Solde insuffisant");
        }
    }

    
}

const compte = new CompteBancaire(0);
compte.deposer(500);
console.log(compte.solde);
compte.retirer(15);
console.log(compte.solde);

