let form = document.getElementById('myForm');



form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    
    let nom = form.elements['name'].value;
    let prenom = form.elements['prenom'].value;
    let adresse = form.elements['adresse'].value;
    let ville = form.elements['ville'].value;
    let codepostal = form.elements['codepostal'].value;

    if (nom === '') {
    alert('Le nom ne peut pas être vide');
    return;
    }
    if (prenom === '') {
    alert('Le prenom ne peut pas être vide');
    return;
    }
    if (prenom === '') {
    alert('Le prenom ne peut pas être vide');
    return;
    }
    if (prenom === '') {
    alert('Le prenom ne peut pas être vide');
    return;
    }
    if (prenom === '') {
    alert('Le prenom ne peut pas être vide');
    return;
    }
    
        tableau.innerHTML += `
        <tr>
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${adresse}</td>
        <td>${ville}</td>
        <td>${codepostal}</td>
        </tr>`
    });

