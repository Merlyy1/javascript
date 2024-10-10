const axios = require('axios');
const express = require('express');
const app = express();

const port = 3000;


app.get('/', (req, res) => {
 axios.get('https://api.github.com/users/octocat')

    .then(response => {
         res.json(response.data);
    })
    

});
app.listen(port, () => 
{
    console.log(`L'application est en écoute sur le port ${port}`);
});

