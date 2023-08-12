//auth

const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    //busca o token no cabeçalho da requisição
    const authHeader = req.headers.authorization;

    //verifica se o token foi informado
    if (!authHeader)
        return res.status(401).send({
            error: 'Token não informado.'
        });

    //verifica se o token está no formato correto
    const parts = authHeader.split(' ');
    if (!parts.length == 2)
        return res.status(401).send({
            error: 'Token com formato inválido.'
        });

    //desestruturação do array
    const [scheme, token] = parts;

    //verifica se o token começa com Bearer
    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({
            error: 'Token mal formatado.'
        });

    //verifica se o token é válido
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err)
            return res.status(401).send({
                error: 'Token inválido.'
            });

        //se o token for válido, o id do usuário é enviado
        req.userId = decoded.id;
        return next();
    });
}