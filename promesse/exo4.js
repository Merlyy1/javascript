
const diviser= (a,b) => {
            return promesse = new Promise((resolve,reject)=> {
                resultat = a/b;
        if (b!=0)resolve("le résultat est "+resultat);
        else reject("Division par zéro !");
        console.log(promesse)
        // return promesse
})


}

let choix_1= parseFloat(prompt("Entre le premier nombre"))
let choix_2 = parseFloat(prompt("Entre le premier nombre"))

diviser(choix_1,choix_2)
.then((text)=>{console.log(text);})
.catch((text)=>{console.log(text);})