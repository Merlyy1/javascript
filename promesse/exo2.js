const promesse = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        const aleatoire = Math.trunc((Math.random()*10)+1);
    if (aleatoire<=5)resolve("entre 5 et 1,promesse résolue !")
        else reject("supérieure à 5,promesse rejetée !")
    },2000
)
    
})

.then((text)=>{console.log(text);})
.catch((text)=>{console.log(text);})

console.log(promesse);

