import express, { Request, Response } from "express";
const alunosController = require('./controllers/alunosController')
const alunosMiddleware = require('./middlewares/alunosMiddlewares')

const router = express.Router();

router.get('/alunos', alunosController.getAll);
router.post('/alunos', alunosMiddleware.validateBody, alunosController.criarAluno);
router.delete('/alunos/:id', alunosController.deleteAluno);
router.put('/alunos/:id', alunosMiddleware.validateBody, alunosController.updateAluno);



module.exports = router;