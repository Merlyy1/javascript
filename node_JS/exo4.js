const fs = require('fs');
fs.readFile('liste.html', 'utf8', (err, jsonString) => {
if (err) {
console.log('Error reading file from disk:', err);
return;
}
    try {
        const obj = JSON.stringify(fs);
        const chaine = obj['chaine 1']['chaine'];
        console.log(chaine);
        } 
        catch(err) {
            console.log('Error parsing JSON string:', err);
        }
        });