import HttpStatus from 'http-status-codes';
import * as UserService from '../services';

// Retorna todos os usuários
export const getAllUsers = (req, res) => {
    const s = UserService.getAlls();
    res.status(HttpStatus.OK).json(s);
};

// Retorna um usuário pelo ID
export const getUserById = (req, res) => {
    const Id = req.params.id;
    const object = UserService.getById(Id);

    if (!object) {
        return res.status(HttpStatus.NOT_FOUND).json({
            error: 'Usuário não encontrado'
        });
    }

    res.status(HttpStatus.OK).json();
};

// Cria um novo usuário
export const createUser = (req, res) => {
    const object = req.body;
    const created = UserService.create(object);
    res.status(HttpStatus.CREATED).json(created);
};

// Atualiza um usuário existente
export const updateUser = (req, res) => {
    const Id = req.params.id;
    const updatedData = req.body;
    const updated = UserService.update(Id, updatedData);

    if (!updated) {
        return res.status(HttpStatus.NOT_FOUND).json({
            error: 'Usuário não encontrado'
        });
    }

    res.status(HttpStatus.OK).json(updated);
};

// Exclui um usuário
export const deleteUser = (req, res) => {
    const Id = req.params.id;
    const deleted = UserService.delete(Id);

    if (!deleted) {
        return res.status(HttpStatus.NOT_FOUND).json({
            error: 'Usuário não encontrado'
        });
    }

    res.status(HttpStatus.NO_CONTENT).send();
};