import express from 'express';
import dotenv from 'dotenv';
import  todoListRouter from './routes/todoListRouter';

dotenv.config();

const app = express();

app.use(express.json());
app.use(todoListRouter);


export default app;