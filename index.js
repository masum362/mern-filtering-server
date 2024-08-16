import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router/router.js';
import connection from './db/connection.js';

dotenv.config();

const app = express();

app.use(cors({
    credentials:true,
    origin:'*'
}))
app.use(express.json())
app.use('/',router)

connection(process.env.MONGODBURI)
const port = process.env.PORT || 3001;
app.listen(port , () =>console.log(`server listening on ${port}`));
