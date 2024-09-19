
let poids = parseInt(prompt("quel est ton poids ?", ""));
console.log(poids);

let taille =parseInt( prompt("quel est ta taille ?", ""))/100;
console.log(taille);

function calculIMC() 
{
    let imc = poids/(taille*taille);
    return imc;
}

alert("votre imc: "+(calculIMC()).toFixed(2));