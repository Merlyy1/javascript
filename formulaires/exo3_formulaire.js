
let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let message = document.getElementById("secret");
// console.log(message)
    let mot_de_passe = "bts" 

    let lemotDePasse = form.elements['password'].value;
  


    console.log(lemotDePasse)

    if (lemotDePasse === mot_de_passe)
    {
        // alert("Mot de passe correcte");
        message.style.display = "block";
    }
    else
    {
        
        alert("Mot de passe incorrect");
    }
    
});


// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Empêche la soumission par défaut du formulaire

//     let lemotDePasse = form.elements['password'].value;
  
    

//      console.log(lemotDePasse)


//     });