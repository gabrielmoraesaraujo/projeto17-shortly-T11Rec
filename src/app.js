import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import cadastroRoutes from "./routes/cadastro.Routes.js"

const app = express(); 
app.use(cors());
app.use(express.json());

app.use(cadastroRoutes);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running in port: ${port}`)); 