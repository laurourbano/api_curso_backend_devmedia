const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const authMiddleware = require('./middlewares/auth');

routes.get('/', (_, res) => {
    res.json({
        message: 'Olá, mundo!'
    });
});

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.authenticate);

routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

module.exports = routes;