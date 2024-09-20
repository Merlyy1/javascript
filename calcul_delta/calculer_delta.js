//valeur1=a

//valeur2=b

//valeur3=c

function calculDelta(valeur1,valeur2,valeur3)
 {
    delta = valeur2*valeur2-4*valeur1*valeur3;
    //return delta;

    if (delta < 0)
        {
            console.log("L'équation n'a pas de solution");
        }
        else if (delta == 0)
        {
            console.log("L'équation a une unique solution : ");

            let egaleZero = -valeur2/2*valeur1;

            return console.log(egaleZero);
           
        }
        else if (delta > 0)
        {
            console.log("L'équation a une unique solution : ");

            let supAzERO = (-valeur2-Math.sqrt(delta))/2*valeur1;
            let superieur = (-valeur2+Math.sqrt(delta))/2*valeur1;

            return console.log("les resultats sont : x1 = " +supAzERO+"et x2 = " +superieur);
        
        }
        
    //return delta;
 }

let a = parseFloat(prompt("entrez la valeur de a : " ));
let b = parseFloat(prompt("entrez la valeur de b : " ));
let c = parseFloat(prompt("entrez la valeur de c : " ));



calculDelta(a,b,c);

