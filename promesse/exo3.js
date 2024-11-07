let utilisateur = {
    nom:"",
    age:0
};

const verifierUtilisateur = (utilisateur) => {
            return promesse = new Promise((resolve,reject)=> {
        if (utilisateur.age>=18)resolve(utilisateur.nom + " est un utilisateur majeur");
        else reject(utilisateur.nom + " est un utilisateur mineur");
        console.log(promesse)
        // return promesse
})


}

utilisateur.nom = prompt("quel est ton nom ?")
utilisateur.age = prompt("quel est ton age ?")

verifierUtilisateur(utilisateur)
.then((text)=>{console.log(text);})
.catch((text)=>{console.log(text);})