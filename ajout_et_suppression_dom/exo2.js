let button = document.querySelector('button');

button.addEventListener('click', function () {
    //alert('Vous avez cliqué sur le bouton !');
    let elementASupprimer = document.getElementById("p1");
    elementASupprimer.remove();
});