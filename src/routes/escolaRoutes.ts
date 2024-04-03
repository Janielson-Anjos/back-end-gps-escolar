import express, { Request, Response } from 'express';
// import { listEscolas } from '../controllers/EscolaController';
import EscolaController from '../controllers/EscolaController';

const router = express.Router();

// router.get('/escolas', listEscolas);
router.get('/', async (req: Request, res: Response) => {
    await EscolaController.getAllEscolas(req, res);
})

export default router;