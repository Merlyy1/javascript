function calculatrice(n,v,operation)
{
    let resultat;
    if (operation == "+")
    {
        resultat = n+v;
        alert(n+"+"+v+"="+resultat);
    }
    else if (operation == "-")
    {
        resultat = n-v;
        alert(n+"-"+v+"="+resultat);
    }
    else if (operation == "*")
    {
        resultat = n*v;
        alert(n+"*"+v+"="+resultat);
    }
    else if (operation == "/")
    {
        resultat = n/v;
        alert(n+"/"+v+"="+resultat);
    }
    else
    {
        alert("on attend une opération !!");
    }
}

let n = parseInt(prompt("ecrivez un nombre"));
let v = parseInt(prompt("ecrivez un autre nombre"));
let operation = prompt("addition, multiplication, soustraction ou division ?");

calculatrice(n,v,operation);