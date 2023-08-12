//userController
const userController = function (User) {
    //autentica o usuário
    const authenticate = function (req, res) {
        //busca o email e senha no corpo da requisição
        const _req$body = req.body,
            email = _req$body.email,
            password = _req$body.password;
        //busca o usuário pelo email
        User.findOne({
            email: email
        }, function (err, user) {
            if (err)
                return res.status(400).send({
                    error: 'Erro ao buscar usuário.'
                });
            //verifica se o usuário existe
            if (!user)
                return res.status(400).send({
                    error: 'Usuário não encontrado.'
                });
            //verifica se a senha informada é válida
            if (!bcrypt.compareSync(password, user.password))
                return res.status(400).send({
                    error: 'Senha inválida.'
                });
            //se a senha for válida, o token é gerado
            user.password = undefined;
            return res.send({
                user: user,
                token: generateToken({
                    id: user.id
                })
            });
        });
    };
    //gera o token
    const generateToken = function () {
        const params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return jwt.sign(params, authConfig.secret, {
            expiresIn: 86400
        });
    }
    //retorna os métodos
    return {
        authenticate: authenticate
    };
};

module.exports = userController;