import express from "express";
import "dotenv/config";
import { checkDatabaseConnection } from "./utils/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

checkDatabaseConnection();

app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`\nServer running on http://localhost:${PORT}`);
});