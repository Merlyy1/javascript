let prix_ht = parseInt(prompt("écrivez un nombre"));
let tva = 1.20;


function calculTVA(ht, montant_tva)
{
    return ht*montant_tva;
}

alert(calculTVA(prix_ht,tva));