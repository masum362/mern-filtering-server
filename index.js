import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    credentials:true,
    origin:'*'
}))
app.use(express.json())

const port = process.env.PORT || 3000;
app.listen(port , () =>console.log(`server listening on ${port}`));
