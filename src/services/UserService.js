const User = require('../models/userModel.js');

const users = [User];

const getAllUsers = () => {
    return users;
};

const getUserById = (userId) => {
    return users.find(user => user.id === userId);
};

const createUser = (userData) => {
    const newUser = new User(Date.now().toString(), userData.name, userData.email);
    users.push(newUser);
    return newUser;
};

const updateUser = (userId, updatedUserData) => {
    const userToUpdate = users.find(user => user.id === userId);
    if (userToUpdate) {
        Object.assign(userToUpdate, updatedUserData);
        return userToUpdate;
    }
    return null;
};

const deleteUser = (userId) => {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        return users.splice(userIndex, 1)[0];
    }
    return null;
};

exports.module = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
