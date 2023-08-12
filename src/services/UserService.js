import fs from 'fs';
import path from 'path';
import { UserModel } from '../models/UserModel.js';

const dataFilePath = path.join(__dirname, '..', 'dados.json');

// Lê os dados do arquivo JSON
const readData = () => {
    const rawData = fs.readFileSync(dataFilePath);
    return JSON.parse(rawData);
};

// Escreve os dados no arquivo JSON
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Retorna todos os usuários
export const getAllUsers = () => {
    const data = readData();
    return data.users || [];
};

// Retorna um usuário pelo ID
export const getUserById = (userId) => {
    const data = readData();
    const user = data.users.find((user) => user.id === userId);
    return user || null;
};

// Cria um novo usuário
export const createUser = (userData) => {
    const data = readData();
    const newUser = {
        id: Date.now().toString(),
        ...userData
    };
    data.users.push(newUser);
    writeData(data);
    return newUser;
};

// Atualiza um usuário existente
export const updateUser = (userId, updatedUserData) => {
    const data = readData();
    const userIndex = data.users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        return null;
    }
    data.users[userIndex] = {
        ...data.users[userIndex],
        ...updatedUserData
    };
    writeData(data);
    return data.users[userIndex];
};

// Exclui um usuário
export const deleteUser = (userId) => {
    const data = readData();
    const userIndex = data.users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        return null;
    }
    const deletedUser = data.users.splice(userIndex, 1)[0];
    writeData(data);
    return deletedUser;
};

module.exports = UserService