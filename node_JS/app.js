const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
res.send('Bonjour, bienvenue sur mon application Node.js !');
});
app.listen(port, () => {
console.log(`L'application est en écoute sur le port ${port}`);
});