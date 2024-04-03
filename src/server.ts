const app = require('./app');
import dotenv from 'dotenv';


process.env.PORT
dotenv.config();
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {

console.log(`Servidor rodando em http://localhost:${PORT}`);

});