const express = require('express');

const routes = express.Router();

const funcionarios = require('./data/funcionarios.json');

// rota para listar todos os funcionários
routes.get('/funcionarios', (_, res) => {
    return res.json({
        funcionarios
    });
});

// rota para listar um funcionário específico
routes.get('/funcionarios/:id', (req, res) => {
    const {
        id
    } = req.params;

    if (id > funcionarios.length) {
        return res.status(400).json({
            error: 'Funcionário não encontrado'
        });
    }

    return res.json(funcionarios[id]);
});

// rota para cadastrar um novo funcionário
routes.post('/funcionarios', (req, res) => {
    const {
        nome,
        cargo,
        idade,
        salario
    } = req.body;
});

// rota para atualizar um funcionário
routes.put('/funcionarios/:id', (req, res) => {
    const {
        id
    } = req.params;
});

// rota para deletar um funcionário
routes.delete('/funcionarios/:id', (req, res) => {
    const {
        id
    } = req.params;
});

module.exports = routes;