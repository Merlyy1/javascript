let phoneForm = document.getElementById('phoneForm');
phoneForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission réelle du formulaire
    let phone = document.getElementById('adresseip').value;
    phone = phone.replace(/<[^>]?>/g, ""); // on remplace les balises html par un espace
    if (/^([A-F0-9]{2}[:]){5}[A-F0-9]{2}$/.test(phone)) 
    {
        document.getElementById('result').innerHTML = 'Ladresse ' + phone + ' est une adresse <strong>valide</strong> !';
    } 
    else 
    {
        document.getElementById('result').innerHTML = 'Ladresse ' + phone + ' n\'est pas valide, recommencez !';
    }
});
//([1-9][ .-]?|[1-9]([0-9]){1,2}[ .-]?)([0-9][ .-]?|[1-9]([0-9]){1,2}[ .-]?){2}([0-9][ .-]?|[1-9]([0-9]){1,2})

