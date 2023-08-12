import fs from 'fs';
import path from 'path';

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
export const getAllobjects = () => {
    const data = readData();
    return data.objects || [];
};

// Retorna um usuário pelo ID
export const getobjectById = (objectId) => {
    const data = readData();
    const object = data.objects.find((object) => object.id === objectId);
    return object || null;
};

// Cria um novo usuário
export const createobject = (objectData) => {
    const data = readData();
    const newobject = {
        id: Date.now().toString(),
        ...objectData
    };
    data.objects.push(newobject);
    writeData(data);
    return newobject;
};

// Atualiza um usuário existente
export const updateobject = (objectId, updatedobjectData) => {
    const data = readData();
    const objectIndex = data.objects.findIndex((object) => object.id === objectId);
    if (objectIndex === -1) {
        return null;
    }
    data.objects[objectIndex] = {
        ...data.objects[objectIndex],
        ...updatedobjectData
    };
    writeData(data);
    return data.objects[objectIndex];
};

// Exclui um usuário
export const deleteobject = (objectId) => {
    const data = readData();
    const objectIndex = data.objects.findIndex((object) => object.id === objectId);
    if (objectIndex === -1) {
        return null;
    }
    const deletedobject = data.objects.splice(objectIndex, 1)[0];
    writeData(data);
    return deletedobject;
};

module.exports = Service