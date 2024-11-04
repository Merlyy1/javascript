let utilisateur = {
    nom:"",
    age:0
};

const verifierUtilisateur = (user) => {
    const promesse = new Promise((resolve,reject)=> {
        if (user.age>=18)resolve(user.nom + " est un utilisateur majeur");
        else reject(user.nom + " est un utilisateur mineur");

})
   
.then((text)=>{console.log(text);})
.catch((text)=>{console.log(text);})
console.log(promesse)
}

utilisateur.nom = prompt("quel est ton nom ?")
utilisateur.age = prompt("quel est ton age ?")

verifierUtilisateur(utilisateur)
