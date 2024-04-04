import express, { NextFunction, Request, Response } from 'express';
import usuarioRoutes from './routes/usuarioRoutes';
import escolaRoutes from './routes/escolaRoutes';
import bodyParser from 'body-parser';

import dotenv from "dotenv";
import { PoolClient } from 'pg';
import pool from './database';
import indexRouter from './routes/indexRoutes';

dotenv.config();

const app = express();

interface ExtendedRequest extends Request {
    db?: PoolClient
}





app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

app.use(async (req: ExtendedRequest, res: Response, next: NextFunction)  => {
    console.log('Chamando o banco de dados');
    try {
        const client: PoolClient = await pool.connect();
        req.db = client;
        console.log(' Conexão com o banco de dados ok');
        next();
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados", error);
        res.status(500).json({error: "Erro interno no servidor"});
        
    }
});

app.use((req: ExtendedRequest, res: Response, next: NextFunction) => {
    const db = req.db;
    if (db) {
      db.release();
    }
    next();
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res
      .status(500)
      .send("*** Erro Interno no Servidor! Por favor Verifique seu Servidor ***");
  });

// testando uma rota GET em escolas do banco de dados
// app.get('/escolas', async (req: ExtendedRequest, res: Response) => {
//     try {
//         const result = await pool.query('SELECT * FROM escola');
//         res.status(200).json(result.rows);
//     } catch (error) {
//         console.error("Erro ao buscar escolas", error);
//         res.status(500).json({ error: "Erro interno no servidor" });
//     }
// });

// rotas
app.use("/api", indexRouter);
app.use('/users', usuarioRoutes);

// app.use('/escola', escolaRoutes);

const PORT = process.env.DB_PORT;
// const PORT = 5432;
app.listen(PORT, () => {
    console.log('Server rodando na porta ${PORT}');
    console.log('Server acessível em http://localhost:${PORT}');
    
});


