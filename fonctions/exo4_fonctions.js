let nombre = parseInt(prompt("écrivez un nombre"));

function estPair(nombre_pair)
{
    let resultat = nombre_pair%2;
    if(resultat == 0)
        {
            console.log("c'est pair");
            return true;
        }       
    else
    {
        console.log("c'est impair");
        return false;
    }
}
estPair(nombre)
