const StatusCodes = require('http-status-codes');
const UserService = require('../services/UserService');

// Retorna todos os usuários
const getAllUsers = (req, res) => {
    const User = UserService.getAllUsers();
    res.status(StatusCodes.OK).json(User);
};

// Retorna um usuário pelo ID
const getUserById = (req, res) => {
    const Id = req.params.id;
    const User = UserService.getUserById(Id);

    if (!User) {
        return res.status(StatusCodes.NOT_FOUND).json({
            error: 'Usuário não encontrado'
        });
    }

    res.status(StatusCodes.OK).json();
};

// Cria um novo usuário
const createUser = (req, res) => {
    const User = req.body;
    const createdUser = UserService.createUser(User);
    res.status(StatusCodes.CREATED).json(createdUser);
};

// Atualiza um usuário existente
const updateUser = (req, res) => {
    const Id = req.params.id;
    const updatedData = req.body;
    const updated = UserService.updateUser(Id, updatedData);

    if (!updated) {
        return res.status(StatusCodes.NOT_FOUND).json({
            error: 'Usuário não encontrado'
        });
    }

    res.status(StatusCodes.OK).json(updated);
};

// Exclui um usuário
const deleteUser = (req, res) => {
    const Id = req.params.id;
    const deleted = UserService.deleteUser(Id);

    if (!deleted) {
        return res.status(StatusCodes.NOT_FOUND).json({
            error: 'Usuário não encontrado'
        });
    }

    res.status(StatusCodes.NO_CONTENT).send();
};

exports.module = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};