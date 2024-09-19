let marque = ["apple", "samsung", "dell", "hp", "lg", "acer"];
console.log("voici la liste des marques : "+marque);

let askClient = prompt("vous preferez quelle marque ?");

function client(tab_marque,demand_client)
{
    for (element of tab_marque){
        if (demand_client == element){
            let index = tab_marque.indexOf(element)
          
            tab_marque.splice(index, 1);
        } 
    
        }
        console.log(tab_marque);
}

client(marque,askClient);