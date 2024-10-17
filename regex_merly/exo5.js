const fs = require('fs');

const fy = fs.readFile('nmap.txt', 'utf8', (err, data) => {
    if (err)
    {
    console.log("erreur dans la lecture du fichier :" , err);
    return;
    }
    else{

        const address_ip = /(([1-9]){3}[.]?){2}[.][0][.][0-9]{1,3}/g
        const ip = data.match(address_ip)
        console.table(ip)
    }
    
});

//(/^([1-9][ .-]?|[1-9]([0-9]){1,2}[ .-]?)([0-9][ .-]?|[1-9]([0-9]){1,2}[ .-]?){2}([0-9][ .-]?|[1-9]([0-9]){1,2})$/.test(phone)) 
  