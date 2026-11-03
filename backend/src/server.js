import express from "express";
import "dotenv/config";
import { checkDatabaseConnection } from "./utils/checkDatabaseConnection.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

checkDatabaseConnection();

app.listen(PORT, () => {
    console.log(`\nServidor inicializado em http://localhost:${PORT}\n`);
});