const fs = require('fs');

const content = fs.readFileSync('input.txt', {encoding: 'utf8'})
console.log(content)


const merly = fs.writeFileSync( "output.txt" , content.toUpperCase() , err => 
    { 
        if (err) 
        {   
            console.log(merly); 
            return ;   
        }
    });
          
    
