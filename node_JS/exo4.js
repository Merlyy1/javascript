const express = require('express');
const app = express();
const port = 3000;

app.get('/articles', (req, res) => 
    {
    const article = { "chaine 5 ":
    {"id": "1" , "nom": "test" , "contenu": "frite"
    },
    "chaine 6 ":
    {"id": "1" , "nom": "test" , "contenu": "frite"
    },
    
}
    res.json(article)
});


app.listen(port, () => 
{
    console.log(`L'application est en écoute sur le port ${port}`);
});