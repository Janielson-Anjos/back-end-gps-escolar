import { Request, Response } from "express";
import db from '../database';
import pool from '../database';
import { PoolClient } from 'pg';

interface ExtendedRequest extends Request {
    db?: PoolClient
}

const createUser = async (req: Request, res: Response) => {

    try {
        const { nome_usuario, email, senha } = req.body;
        const newUser = await db.query('INSERT INTO users (nome_usuario, email, senha) VALUES($1, $2, $3) RETURNING *', [nome_usuario, email, senha]);
        res.status(201).json(newUser.rows);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({error: 'Error creating user'});
    }

};

const allUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const user = await db.query('SELECT * FROM users');
        res.status(200).json(user.rows);
    } catch (error) {
        console.error('Error ao buscar user:', error);
        res.status(500).json({ error: 'Error ao buscar user'});
    }

};


// const getUserById = async (req: Request, res: Response) => {

//     try {
//         const { id } = req.params;
//         const user = await db.query('SELECT * FROM users WHERE id = $1', id);
//         res.status(200).json(user);
//     } catch (error) {
//         console.error('Error ao buscar user:', error);
//         res.status(500).json({ error: 'Error ao buscar user'});
//     }

// };

// export { createUser, getUserById };
export { createUser, allUser };