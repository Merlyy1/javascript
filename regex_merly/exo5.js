// const fs = require('fs');

// const fy = fs.readFile('nmap.txt', 'utf8', (err, data) => {
//     if (err)
//     {
//     console.log("erreur dans la lecture du fichier :" , err);
//     return;
//     }
//     else{

//         const address_ip = /(([1-9]){3}[.]?){2}[.][0][.][0-9]{1,3}/g
//         const ip = data.match(address_ip)
//         console.table(ip)

//         const address_mac = /([A-F0-9]{2}[:]){5}[A-F0-9]{2}$/g
//         const mac = data.match(address_mac)
//         console.table(mac)
//     }
    
// });

const fs = require('fs');

fs.readFile('nmap.txt', 'utf8', (err, data) => {
  if (err) 
    {
    console.error("Erreur lecture", err);
    return;
    }

 
  const regex = /Nmap scan report for ([\d\.]+)[\s\S]+?MAC Address: ([\w:]+) \((.*?)\)/g;
  const sortie = [];
  let match;

  while ((match = regex.exec(data))) 
    {
    const ip = match[1];
    const mac = match[2];
    const host = match[3];

    sortie.push({ ip, mac, host });
    }


  console.table(sortie);
});
