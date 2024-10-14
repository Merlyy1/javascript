// let phoneForm = document.getElementById('phoneForm');
// phoneForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Empêche la soumission réelle du formulaire
//     let phone = document.getElementById('mail').value;
//     phone = phone.replace(/<[^>]?>/g, ""); // on remplace les balises html par un espace
//     if (/^0[1-68]([-. ]?[0-9]{2}){4}$/.test(phone)) 
//     {
//         document.getElementById('result').innerHTML = 'Le numéro ' + phone + ' est un numéro <strong>valide</strong> !';
//     } 
//     else 
//     {
//         document.getElementById('result').innerHTML = 'Le numéro ' + phone + ' n\'est pas valide, recommencez !';
//     }
// });

let phoneForm = document.getElementById('phoneForm');
phoneForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission réelle du formulaire
    let phone = document.getElementById('mail').value;
    phone = phone.replace(/<[^>]?>/g, ""); // on remplace les balises html par un espace
    if (/^[a-z0-9]([.]?[a-z0-9]){5,29}@gmail.com$/i.test(phone))//.test(phone)) 
    {
        document.getElementById('result').innerHTML = 'Le mail ' + phone + ' est un mail <strong>valide</strong> !';
    } 
    else 
    {
        document.getElementById('result').innerHTML = 'Le mail ' + phone + ' n\'est pas valide, recommencez !';
    }
});
