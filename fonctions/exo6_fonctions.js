let celsus= parseInt(prompt("écrivez une temperature"));
let resultat;

function convertirTemperature(temp_degreC)
{
    let resultat = temp_degreC * 9/5 +32;
    alert("la température en fahrenheit est " + resultat);
}

alert(convertirTemperature(celsus));