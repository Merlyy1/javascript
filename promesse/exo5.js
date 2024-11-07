let utilisateur = {
    nom:"merly",
    age:21
}
const appelAPI = () => {
    const promesse = new Promise((resolve,reject)=> {
        setTimeout(() => {
            const aleatoire = ((Math.random()*10)+1);
            console.log(aleatoire)
            if(aleatoire>=5)resolve (console.log(utilisateur));
            else reject("Erreur lors de l'appel API");
            
            //console.log(promesse)
        },1000
    )

})
.then((text)=>{console.log(text);})
.catch((text)=>{console.log(text);})
//console.log(promesse)
}

appelAPI()
