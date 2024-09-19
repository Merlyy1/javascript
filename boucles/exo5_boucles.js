let i = 1;
//let n = 6;

let n = prompt("ecrivez un chiffre n");

function Multiplication(i,n)
{
    for(i=1; i<=10; i++)
    {
        resultat = i*n;
        console.log(n+"*"+i+"="+resultat);
    }
}
Multiplication(1,n);