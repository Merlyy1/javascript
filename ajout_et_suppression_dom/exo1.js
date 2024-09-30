let button = document.querySelector('button');

button.addEventListener('click', function () {
    //alert('Vous avez cliqué sur le bouton !');
    let newElement = document.createElement("div1");
    let para2 = document.getElementById("p2");
    para2.appendChild(newElement);
    newElement.textContent = "<br>bonjour le monde";

    /*let button = document.getElementById("monBouton");
    button.addEventListener('click', function () {
    let para = document.createElement("p");
    let para2 = document.getElementById("p2");
    para2.appendChild(newElement);
    newElement.innerHTML = "<br>bonjour le monde";

});
