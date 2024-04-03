// import pgPromise from "pg-promise";
// import dotenv from "dotenv";

// dotenv.config();

// const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;


// const pgp = pgPromise();

// const db = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);

// export default db;

import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432"),
    ssl: {
        rejectUnauthorized: false,
    },

});
// const pool = new Pool({
//     user: "postgres",
//     host: "banco-gps.cnomqqwy21eq.sa-east-1.rds.amazonaws.com",
//     database: "db_gps",
//     password: "bancogps",
//     port: parseInt("5432"),
//     ssl: {
//         rejectUnauthorized: false,
//     },

// });


export default pool;