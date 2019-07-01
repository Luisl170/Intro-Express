const express = require('express');
const app = express();

// Settings
app.set('APP_NAME', 'Fazt express tutorial');
// Seteo de view engine EJS
app.set('view engine', 'ejs');

// Para uso de JSON´s
app.use(express.json());

// Estructura básica de un Middleware
app.use((req, res, next) => {
    console.log(`Middleware logger ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
});

app.get('/', (req, res) => {
    const users = [{name: 'John'},{name: 'Kafka'},{name: 'Dragon'}];
    // Rendereo de plantilla ejs
    res.render('index.ejs', {users});
});

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

app.use(express.static('public'));

app.listen(3000, () => {
    console.log(app.get('APP_NAME'));
    console.log('Server on port 3000');
});