let button = document.querySelector('button');

button.addEventListener('click', function () {
    //alert('Vous avez cliqué sur le bouton !');
    let p = document.getElementById("p2");
    p.innerHTML = "<h2>Ceci est un nouveau texte pour le paragraphe.</h2>";
});