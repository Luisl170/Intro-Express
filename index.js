const express = require('express');
const app = express();

// Para uso de JSON´s
app.use(express.json());

app.get('/user', (req, res) => {
    res.json({
        'username': 'Cameron',
        'lastname': 'Howe'
    });
});

// Obtención de los parametros de la url
app.post('/user/:id', (req, res) => {
    console.log(req.params);
    res.send('Hello post');
});

app.post('/user', (req, res) => {
    // Obtención del curpo de la petición
    console.log(req.body);
    res.send('Hello post');
});

app.put('/user', (req, res) => {
    res.send('Hello put');
});

app.delete('/user', (req, res) => {
    res.send('Hello delete');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});