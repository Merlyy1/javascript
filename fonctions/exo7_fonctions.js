 

let rayonCercle = parseInt(prompt("écrivez le rayon du cercle"));


function perimetreCercle(rCercle)
{   
    let formule_perimetre = 2*Math.PI*rCercle;
    alert("le résultat du périmètre du cercle est "+formule_perimetre);
}

function aireCercle(rCercle)
{
    let formule_air = Math.PI*Math.pow(rCercle, 2);
    alert("le résultat de l'air du cercle est "+formule_air);
}

perimetreCercle(rayonCercle);
aireCercle(rayonCercle);