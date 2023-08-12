import HttpStatus from 'http-status-codes';
import * as Service from '../services';

// Retorna todos os usuários
export const getAll = (req, res) => {
    const s = Service.getAlls();
    res.status(HttpStatus.OK).json(s);
};

// Retorna um usuário pelo ID
export const getById = (req, res) => {
    const Id = req.params.id;
    const object = Service.getById(Id);

    if (!object) {
        return res.status(HttpStatus.NOT_FOUND).json({
            error: 'Usuário não encontrado'
        });
    }

    res.status(HttpStatus.OK).json();
};

// Cria um novo usuário
export const create = (req, res) => {
    const object = req.body;
    const created = Service.create(object);
    res.status(HttpStatus.CREATED).json(created);
};

// Atualiza um usuário existente
export const update = (req, res) => {
    const Id = req.params.id;
    const updatedData = req.body;
    const updated = Service.update(Id, updatedData);

    if (!updated) {
        return res.status(HttpStatus.NOT_FOUND).json({
            error: 'Usuário não encontrado'
        });
    }

    res.status(HttpStatus.OK).json(updated);
};

// Exclui um usuário
export const deleteId = (req, res) => {
    const Id = req.params.id;
    const deleted = Service.delete(Id);

    if (!deleted) {
        return res.status(HttpStatus.NOT_FOUND).json({
            error: 'Usuário não encontrado'
        });
    }

    res.status(HttpStatus.NO_CONTENT).send();
};