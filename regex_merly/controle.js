let phoneForm = document.getElementById('phoneForm');
phoneForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission réelle du formulaire
    let phone = document.getElementById('adresseip').value;
    phone = phone.replace(/<[^>]?>/g, ""); // on remplace les balises html par un espace
    if (/^(0[1-9]|1[0-9]|2[0-9]|3[0-1])[-/]?(0[1-9]|1[0-2])[-/]?(202[0-4])$/.test(phone) )//.test(phone)) 
    {
        document.getElementById('result').innerHTML = 'La date ' + phone + ' est une date <strong>valide</strong> !';
    } 
    else 
    {
        document.getElementById('result').innerHTML = 'La date ' + phone + ' n\'est pas valide, recommencez !';
    }
});

