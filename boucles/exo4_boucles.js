let n = parseInt(prompt("ecrivez un chiffre n"));
let i = 1;

function somme(i,n)
{
    for(i=1; i<=20; i++)
    {
        resultat=n+i;
        console.log(n+"+"+i+"="+resultat);
    }
}
somme(1,n);