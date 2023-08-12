const express = require('express');
require('dotenv').config();
const app = express();
const routes = require('./routes.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', routes);

//rotas
app.get('/', (_, res) => {
    res.json({
        message: 'Olá, mundo!'
    });
});

//servidor
app.listen(port, () => {
    console.log(
        `Servidor rodando em: 
        http://localhost:${port}`
    );
});