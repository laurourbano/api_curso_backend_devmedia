//authController
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

//gera o token
function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

module.exports = {
    //autentica o usuário
    async authenticate(req, res) {
        //busca o email e senha no corpo da requisição
        const {
            email,
            password
        } = req.body;
    }
}