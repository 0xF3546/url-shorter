import express, { NextFunction, Request, Response } from "express";
import Database from "./utils/Database.js";
import { MainRouter } from "./Controller/index.js";
import cors from 'cors';

const app = express();
const port = 3001;

const addCorsHeaders = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(cors())
app.use(express.json());
app.use(addCorsHeaders);

app.use(MainRouter);

export const database: Database = new Database();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});