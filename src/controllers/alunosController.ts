import { response } from "express";
const alunosModel = require('../models/alunosModel');

const getAll = async (request: any, response: any) => {

    const alunos = await alunosModel.getAlunos();

    return response.status(200).json(alunos);
}


const criarAluno = async (request: any, response: any) => {
    const cadastrarAluno = await alunosModel.criarAluno(request.body);
    return response.status(201).json(cadastrarAluno);

};

const deleteAluno = async (request: any, response: any) => {
    const { id } = request.params;

    await alunosModel.deleteAluno(id);
    return response.status(204).json();
};

const updateAluno = async (request: any, response: any) => {
    const { id } = request.params;

    await alunosModel.updateAluno(id, request.body);

    return response.status(204).json();
};

module.exports = {
    getAll,
    criarAluno,
    deleteAluno,
    updateAluno
};