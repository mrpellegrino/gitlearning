const express = require('express');

const app = express();

app.get('/teste', (req, res) => {
    return res.json({"message":"Olá Mundos"})
});

app.listen(3333, () => {
    console.log('App listening on port 3333!');
});