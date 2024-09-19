let nombres = [5,10,15,20,25,30];
let valeur = parseInt(prompt("écrivez une valeur et vérifier si elle est présente dans le tableau"));

function tableau(nb)
{
    let found = nb.includes(valeur);
    console.log(found);

    if (found==true)
    {
        console.log("la valeur est bien dans le tableau");
    }
    else
    {
        console.log("la valeur n'est pas dans la liste");
    }
}

tableau(nombres);