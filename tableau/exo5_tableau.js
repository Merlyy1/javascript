let nombres = [5,10,15,20,25,30];

let somme=0;

function tableau(nb_tab)
{
    for(let i=0; i<=5; i++)
    {
        somme+=nb_tab[i];
        //console.log("la somme des éléments dans le tableau est " +somme);
        
    }
    return somme;
}
console.log(tableau(nombres));