const express = require('express');
const server = express();
const cors = require('cors');
const routes = require('./src/routes');


const port = 3000;

//configurar o cors pra ficar liberado
server.use(cors());

//configurar o express pra entender json
server.use(express.json());

// configurar rotas do servidor (routes.js)
server.use('/api', routes);

server.listen(port, () => {
    console.info(`Servidor está funcionando na porta ${port}`);
});