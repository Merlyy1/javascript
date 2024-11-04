const promesse = new Promise((resolve,reject)=>{
    const aleatoire = Math.trunc((Math.random()*10)+1);
    if (aleatoire<=5)resolve("entre 5 et 1")
        else reject("supérieure à 5")

})

console.log(promesse);