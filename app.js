const express = require('express');

const router = require('./src/routes/Router');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.info(`Servidor rodando na porta ${PORT}`);
});