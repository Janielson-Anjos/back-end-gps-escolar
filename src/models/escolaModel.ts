import { Console } from "console";
import { Pool } from "pg";
import { PoolClient } from "pg";

interface ExtendedRequest extends Request {
    db?: PoolClient
}

class EscolaModel {
    static pool = new Pool({
        ssl: {
            rejectUnauthorized: false,
        },
        // connectionString: process.env.DATABASE_URL || "postgres://postgres:bancogps@banco-gps.cnomqqwy21eq.sa-east-1.rds.amazonaws.com/db_gps",
        connectionString: process.env.DATABASE_URL      
        // connectionString: "postgres://postgres:bancogps@banco-gps.cnomqqwy21eq.sa-east-1.rds.amazonaws.com/db_gps",
        
    });
    
    
    id: number;
    nome_escola: string;
    latitude: string;
    longitude: string;

    constructor(data:any) {
        this.id = data.id || undefined;
        this.nome_escola = data.nome_escola;
        this.latitude = data.latitude || undefined;
        this.longitude = data.longitude || undefined;
    }



    static async findAll(): Promise<EscolaModel[]> {
        const result = await this.pool.query('SELECT * FROM escola');
        return result.rows.map((data: any) => new EscolaModel(data));
        
    }
}

export default EscolaModel;