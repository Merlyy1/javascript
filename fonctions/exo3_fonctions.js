

let nombre = parseInt(prompt("ecrivez un nombre"));
let nombre_puissance = parseInt(prompt("ecrivez une puissance"));
let nb=0;
let puiss=0;

function puissance(nb, puiss)
{
    return nb ** puiss;
}

alert(puissance(nombre, nombre_puissance));