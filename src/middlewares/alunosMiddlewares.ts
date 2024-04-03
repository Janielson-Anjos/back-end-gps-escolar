const validateBody = (request: any, response: any, next: any) => {
    const { body } = request;
    
    if (body.email === undefined) {
        return response.status(400).json({ message: 'The field "email" is required.' });
    }
    else if (body.email === '') {
        return response.status(400).json({ message: 'email cannot be empty.' });
    }
    else if (body.escola === undefined) {
        return response.status(400).json({ message: 'The field "escola" is required.' });
    }
    else if (body.escola === '') {
        return response.status(400).json({ message: 'escola cannot be empty.' });
    }
    else if (body.regiao === undefined) {
        return response.status(400).json({ message: 'The field "regiao" is required.' });
    }
    else if (body.regiao === '') {
        return response.status(400).json({ message: 'regiao cannot be empty.' });
    }
    else if (body.serie === undefined) {
        return response.status(400).json({ message: 'The field "serie" is required.' });
    }
    else if (body.serie === '') {
        return response.status(400).json({ message: 'serie cannot be empty.' });
    }
    else if (body.turma === undefined) {
        return response.status(400).json({ message: 'The field "turma" is required.' });
    }
    else if (body.turma === '') {
        return response.status(400).json({ message: 'turma cannot be empty.' });
    }
    else if (body.nomeAluno === undefined) {
        return response.status(400).json({ message: 'The field "nomeAluno" is required.' });
    }
    else if (body.nomeAluno === '') {
        return response.status(400).json({ message: 'nomeAluno cannot be empty.' });
    }
    else if (body.possuiDeficiencia === undefined) {
        return response.status(400).json({ message: 'The field "possuiDeficiencia" is required.' });
    }
    else if (body.possuiDeficiencia === '') {
        return response.status(400).json({ message: 'possuiDeficiencia cannot be empty.' });
    }
    else if (body.possuiDeficiencia === 1 && body.deficiencia === undefined) {
        return response.status(400).json({ message: 'The field "deficiencia" is required.' });
    }
    else if (body.possuiDeficiencia === 1 && body.deficiencia === '') {
        return response.status(400).json({ message: 'deficiencia cannot be empty.' });
    }
    else if (body.respostasPt === undefined) {
        return response.status(400).json({ message: 'The field "respostasPt" is required.' });
    }
    else if (body.respostasPt === '') {
        return response.status(400).json({ message: 'respostasPt cannot be empty.' });
    }
    else if (body.respostasMat === undefined) {
        return response.status(400).json({ message: 'The field "respostasMat" is required.' });
    }
    else if (body.respostasMat === '') {
        return response.status(400).json({ message: 'respostasMat cannot be empty.' });
    }
    next();
};

module.exports = {
    validateBody
}