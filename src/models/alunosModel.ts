// import {connection} from './connection';
const connection = require('./connection');

const getAlunos = async () => {
    const alunos = await connection.execute('SELECT * FROM alunos');
    return alunos[0];
};

const criarAluno = async (aluno:any) => {
    const { email, escola, regiao, serie, turma, nomeAluno, possuiDeficiencia, deficiencia, respostasPt, respostasMat } = aluno;

    const dateUTC = new Date(Date.now()).toUTCString();
    
    const query = 'INSERT INTO alunos(email, escola, regiao, serie, turma, nomeAluno, possuiDeficiencia, deficiencia, respostasPt, respostasMat, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const [cadastrarAluno] = await connection.execute(query, [email, escola, regiao, serie, turma, nomeAluno, possuiDeficiencia, deficiencia, respostasPt, respostasMat, dateUTC]);

    return {insertId: cadastrarAluno.insertId};
};

const deleteAluno = async (id: any) => {
    const removedAluno = await connection.execute('DELETE FROM alunos WHERE id = ?', [id]);
    return removedAluno;
};

const updateAluno = async (id: any, aluno: any) => {
    const {email, escola, regiao, serie, turma, nomeAluno, possuiDeficiencia, deficiencia, respostasPt, respostasMat} = aluno;
    
    const dateUTC = new Date(Date.now()).toUTCString();
    
    const query = 'UPDATE alunos SET email = ?, escola = ?, regiao = ?, serie = ?, turma = ?, nomeAluno = ?, possuiDeficiencia = ?, deficiencia = ?, respostasPt = ?, respostasMat = ?, created_at = ? WHERE id = ?';
    
    const updatedAluno = await connection.execute(query, [email, escola, regiao, serie, turma, nomeAluno, possuiDeficiencia, deficiencia, respostasPt, respostasMat, dateUTC, id]);
    return updatedAluno;
};

module.exports = {
    getAlunos,
    criarAluno,
    deleteAluno,
    updateAluno
};